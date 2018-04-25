// @flow
const debug = require('debug')('athena:queue:slack-import');
import Raven from '../../shared/raven';
import { isEmail } from 'validator';
import {
  getCommunitySettings,
  getSlackUserListData,
  resetCommunitySlackSettings,
  updateSlackInvitesMemberCount,
} from '../models/communitySettings';
import { getUserById } from '../models/user';
import { getCommunityById } from '../models/community';
import {
  sendCommunityInviteNotificationQueue,
  _adminProcessSlackImportQueue,
} from 'shared/bull/queues';
import type { Job, SendSlackInvitationsJobData } from 'shared/bull/types';

const processJob = async (job: Job<SendSlackInvitationsJobData>) => {
  const { communityId, userId } = job.data;

  debug(`sending slack invitations for ${communityId}`);

  const [settings, owner, community] = await Promise.all([
    getCommunitySettings(communityId),
    getUserById(userId),
    getCommunityById(communityId),
  ]);

  if (!settings || !settings.slackSettings) {
    debug('No settings or no slack settings found for community');
    return resetCommunitySlackSettings(communityId);
  }

  const {
    token,
    scope,
    connectedBy,
    inviteCustomMessage,
    teamName,
  } = settings.slackSettings;

  if (!token) {
    debug('No token saved for Slack import');
    return resetCommunitySlackSettings(communityId);
  }

  // Send an API request to Slack using the generated token to return an array of members
  const members = await getSlackUserListData(token, scope).then(results => {
    if (!results) {
      debug('found no members in slack team');
      return resetCommunitySlackSettings(communityId);
    }

    debug('got members in slack team');

    return (
      results
        // filter out any restricted members
        .filter(member => !member.is_restricted || !member.is_ultra_restricted)
        // filter out bots
        .filter(member => !member.is_bot)
        // filter out deleted members
        .filter(member => !member.deleted)
        // only save members with valid email
        .filter(member => member.profile.email && isEmail(member.profile.email))
        // format output data
        .map(member => ({
          firstName: member.profile.first_name,
          lastName: member.profile.last_name,
          email: member.profile.email,
        }))
    );
  });

  if (!members || members.length === 0) {
    debug(`no available members to handle notifications`);
    return resetCommunitySlackSettings(communityId);
  }

  const membersCount = members.length;

  const invitePromises = members.map(member =>
    sendCommunityInviteNotificationQueue.add({
      recipient: {
        email: member.email,
        firstName: member.firstName ? member.firstName : null,
        lastName: member.lastName ? member.lastName : null,
      },
      communityId: communityId,
      senderId: connectedBy,
      customMessage: inviteCustomMessage,
    })
  );

  return await Promise.all([
    ...invitePromises,
    updateSlackInvitesMemberCount(communityId, membersCount),
    _adminProcessSlackImportQueue.add({
      thisUser: owner,
      community,
      invitedCount: membersCount,
      teamName,
    }),
  ]);
};

export default async (job: Job<SendSlackInvitationsJobData>) => {
  try {
    await processJob(job);
  } catch (err) {
    debug('❌ Error in job:\n');
    debug(err);
    Raven.captureException(err);
  }
};
