// @flow

import { graphql, commitMutation, environment } from '@tbergq/relay';

import type {
  trainingJournalLoginMutationVariables,
  trainingJournalLoginMutationResponse,
} from './__generated__/trainingJournalLoginMutation.graphql';

const mutation = graphql`
  mutation trainingJournalLoginMutation(
    $username: String!
    $password: String!
  ) {
    trainingJournalLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

export default function trainingJournalLogin(
  variables: trainingJournalLoginMutationVariables,
  onCompleted: (
    response: ?trainingJournalLoginMutationResponse,
    errors: ?$ReadOnlyArray<Error>,
  ) => void,
) {
  // $FlowExpectedError: Need to fix this
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
  });
}
