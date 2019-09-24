// @flow

import { graphql, commitMutation } from '@tbergq/relay';

import type { AddFavoriteMutationVariables } from './__generated__/AddFavoriteMutation.graphql';

const mutation = graphql`
  mutation AddFavoriteMutation($serieId: ID!) {
    addFavorite(serieId: $serieId) {
      success
      tvShow {
        node {
          id
          isFavorite
        }
      }
    }
  }
`;

export default function addFavorite(
  environment: $FlowFixMe,
  variables: AddFavoriteMutationVariables,
  onCompleted: Function,
) {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
  });
}
