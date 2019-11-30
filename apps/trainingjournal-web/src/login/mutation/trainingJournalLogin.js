// @flow

import { commitMutation, graphql, Environment } from '@tbergq/relay';

import type {
  trainingJournalLoginMutationResponse as MutationResponse,
  trainingJournalLoginMutation as MutationType,
} from './__generated__/trainingJournalLoginMutation.graphql';

const mutation = graphql`
  mutation trainingJournalLoginMutation($username: String!, $password: String!) {
    trainingJournalLogin(username: $username, password: $password) {
      token
      success
    }
  }
`;

export default function trainingJournalLoginMutation(
  username: string,
  password: string,
  onCompleted: MutationResponse => void,
) {
  const environment = Environment.getEnvironment();
  commitMutation<MutationType>(environment, {
    mutation,
    variables: { username, password },
    onCompleted,
  });
}
