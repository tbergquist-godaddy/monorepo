// @flow

import { commitMutation, graphql, environment } from '@tbergq/relay';

import type { createUserMutationVariables } from './__generated__/createUserMutation.graphql';

const mutation = graphql`
  mutation createUserMutation(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser(username: $username, password: $password, email: $email) {
      success
    }
  }
`;

export default function createUserMuatation(
  variables: createUserMutationVariables,
  onCompleted?: Function,
) {
  // $FlowExpectedError: Need to fix this
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
  });
}
