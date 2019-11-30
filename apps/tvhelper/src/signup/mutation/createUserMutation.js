// @flow

import { commitMutation, graphql, Environment } from '@tbergq/relay';

import type {
  createUserMutationVariables,
  createUserMutation as MutationType,
} from './__generated__/createUserMutation.graphql';

const mutation = graphql`
  mutation createUserMutation($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      success
    }
  }
`;

export default function createUserMuatation(
  variables: createUserMutationVariables,
  onCompleted?: Function,
) {
  const environment = Environment.getEnvironment();
  commitMutation<MutationType>(environment, {
    mutation,
    variables,
    onCompleted,
  });
}
