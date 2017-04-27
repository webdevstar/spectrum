import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const setStoryLock = graphql(
  gql`
    mutation setStoryLock($id: ID!, $value: Boolean!) {
      setStoryLock(id: $id, value: $value) {
        id
        locked
      }
    }
  `
);

export const sendMessage = graphql(
  gql`
    mutation sendMessage($message: MessageInput!) {
      addMessage(location: messages, message: $message) {
        id
        message {
          content
          type
        }
      }
    }
  `
);
