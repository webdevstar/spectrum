import data from '../../shared/testing/data';

const community = data.communities[0];
const members = data.usersCommunities
  .filter(
    ({ communityId, isMember }) => community.id === communityId && isMember
  )
  .map(({ userId }) => data.users.find(({ id }) => id === userId));
const { userId: ownerId } = data.usersCommunities.find(
  ({ communityId, isOwner }) => communityId === community.id && isOwner
);
const channels = data.channels.filter(
  ({ communityId }) => community.id === communityId
);

describe('Community settings overview tab', () => {
  beforeEach(() => {
    cy.auth(ownerId);
    cy.visit(`/${community.slug}/settings`);
  });

  it('should render the settings overview and allow editing the community metadata', () => {
    cy.get('[data-e2e-id="community-settings"]').should('be.visible');
    cy.contains('Channels');
    // Make sure all channels are listed and link to their settings
    channels.forEach(channel => {
      cy.contains(channel.name);
      cy.get(`[href*="${community.slug}/${channel.slug}/settings"]`);
    });
    // Make sure the subnav is rendered correctly
    cy.get(`[href*="settings/analytics"]`).should('be.visible');
    cy.get(`[href*="settings/billing"]`).should('be.visible');
    cy.get(`[href*="settings/members"]`).should('be.visible');

    // Editing
    const name = 'text';
    const description = 'text';
    // Change name
    cy
      .get('[data-e2e-id="community-settings-name-input"]')
      .clear()
      .type(`${name}`);
    // Change description
    cy
      .get('[data-e2e-id="community-settings-description-input"]')
      .clear()
      .type(description);
    const website = 'https://mxstbr.com/bla';
    // Change website
    cy
      .get('[data-e2e-id="community-settings-website-input"]')
      .clear()
      .type(website);
    // Submit changes
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', `/${community.slug}`);
    // Make sure changes were applied
    cy.contains(description);
    cy.contains(name);
    cy.contains(website);
    // Revert changes
    cy.visit(`/${community.slug}/settings`);
    cy
      .get('[data-e2e-id="community-settings-name-input"]')
      .clear()
      .type(community.name);
    cy
      .get('[data-e2e-id="community-settings-description-input"]')
      .clear()
      .type(community.description);
    cy
      .get('[data-e2e-id="community-settings-website-input"]')
      .clear()
      .type(community.website);
    cy.get('button[type="submit"]').click();
    cy.location('pathname').should('eq', `/${community.slug}`);
    cy.contains(community.name);
    cy.contains(community.description);
    cy.contains(community.website);
  });
});
