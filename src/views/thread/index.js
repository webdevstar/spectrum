//@flow
import React from 'react';
//$FlowFixMe
import { Route, Redirect } from 'react-router';
//$FlowFixMe
import compose from 'recompose/compose';
//$FlowFixMe
import pure from 'recompose/pure';
import { RouteWrapper } from './style';
import ThreadContainer from './containers';

const ThreadPure = ({ match, location }) => (
  <Route
    location={location}
    key={location.key}
    path={`${match.url}/:threadId`}
    component={ThreadContainer}
  />
);

const Thread = compose(pure)(ThreadPure);

export default Thread;
