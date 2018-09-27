// @flow
import * as React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { Span, ProBadge, BlockedBadge, PendingBadge, TeamBadge } from './style';

type Props = {
  type: string,
  onClick?: Function,
  tipText: string,
  currentUser: ?Object,
  dispatch: Dispatch<Object>,
};

class Badge extends React.Component<Props> {
  render() {
    const { type } = this.props;
    switch (type) {
      case 'pro':
        return (
          <ProBadge
            type={type}
            tipText={this.props.tipText}
            tipLocation={'top-left'}
          >
            {type}
          </ProBadge>
        );
      case 'blocked':
        return (
          <BlockedBadge
            type={type}
            tipText={this.props.tipText}
            tipLocation={'top-left'}
          >
            {type}
          </BlockedBadge>
        );
      case 'pending':
        return (
          <PendingBadge
            type={type}
            tipText={this.props.tipText}
            tipLocation={'top-left'}
          >
            {type}
          </PendingBadge>
        );
      case 'moderator':
      case 'admin':
        return (
          <TeamBadge
            type={type}
            tipText={`${
              type === 'moderator' ? 'Moderator' : 'Owner'
            } of this community`}
            tipLocation="top-left"
          >
            Team
          </TeamBadge>
        );
      default:
        return (
          <Span
            type={type}
            tipText={this.props.tipText}
            tipLocation={'top-left'}
            onClick={this.props.onClick && this.props.onClick}
          >
            {type}
          </Span>
        );
    }
  }
}

const map = state => ({
  currentUser: state.users.currentUser,
});

export default compose(
  // $FlowIssue
  connect(map)
)(Badge);
