// @flow

import { commitMutation, Environment, graphql } from '@tbergq/relay';

import type {
  CreateTjUserMutationResponse,
  CreateTjUserMutationVariables,
} from './__generated__/CreateTjUserMutation.graphql';

const mutation = graphql`
  mutation CreateTjUserMutation($username: String!, $password: String!, $email: String!) {
    createTrainingjournalUser(username: $username, password: $password, email: $email) {
      id
    }
  }
`;

export default function createTjUser(
  variables: CreateTjUserMutationVariables,
  onCompleted: CreateTjUserMutationResponse => void,
) {
  const environment = Environment.getEnvironment('');
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
  });
}
