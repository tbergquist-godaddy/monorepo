// @flow

import { commitMutation, graphql, type RelayEnvironmentType } from '@tbergq/relay';

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
  environment: RelayEnvironmentType,
  username: string,
  password: string,
  onCompleted: MutationResponse => void,
) {
  commitMutation<MutationType>(environment, {
    mutation,
    variables: { username, password },
    onCompleted,
  });
}
