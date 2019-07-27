// @flow

import { graphql, commitMutation, createEnvironment } from '@tbergq/relay';

import type {
  LoginMutationVariables,
  LoginMutationResponse,
} from './__generated__/LoginMutation.graphql';

const fetchFn = async (operation, variables) => {
  const res = await fetch('https://tbergq-graphql.now.sh/graphql/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  const data = await res.json();

  return data;
};

export const environment = createEnvironment({
  fetchFn,
});

const mutation = graphql`
  mutation LoginMutation($username: String!, $password: String!) {
    trainingJournalLogin(username: $username, password: $password) {
      success
      token
    }
  }
`;

export default function login(
  variables: LoginMutationVariables,
  onCompleted: (response: ?LoginMutationResponse, errors: ?$ReadOnlyArray<Error>) => void,
) {
  commitMutation(environment, {
    mutation,
    variables,
    // $FlowFixMe:
    onCompleted,
  });
}
