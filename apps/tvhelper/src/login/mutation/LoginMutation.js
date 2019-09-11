// @flow

import { graphql, commitMutation, Environment } from '@tbergq/relay';

import type {
  LoginMutationVariables,
  LoginMutationResponse,
} from './__generated__/LoginMutation.graphql';

const mutation = graphql`
  mutation LoginMutation($username: String!, $password: String!) {
    tvHelperLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

export default function LoginMutation(
  variables: LoginMutationVariables,
  onCompleted: (response: ?LoginMutationResponse, errors: ?$ReadOnlyArray<Error>) => void,
) {
  const environment = Environment.getEnvironment();
  commitMutation(environment, {
    mutation,
    variables,
    // $FlowFixMe
    onCompleted,
  });
}
