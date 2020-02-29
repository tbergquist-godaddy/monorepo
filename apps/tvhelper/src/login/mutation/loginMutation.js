// @flow

import { graphql, commitMutation, type RelayEnvironmentType } from '@tbergq/relay';

import type {
  loginMutationVariables,
  loginMutationResponse,
  loginMutation as MutationType,
} from './__generated__/loginMutation.graphql';

const mutation = graphql`
  mutation loginMutation($username: String!, $password: String!) {
    tvHelperLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

export default function LoginMutation(
  environment: RelayEnvironmentType,
  variables: loginMutationVariables,
  onCompleted: (response: ?loginMutationResponse, errors: ?$ReadOnlyArray<Error>) => void,
) {
  commitMutation<MutationType>(environment, {
    mutation,
    variables,
    onCompleted,
  });
}
