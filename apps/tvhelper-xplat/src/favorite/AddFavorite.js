// @flow

import {
  graphql,
  commitMutation,
  type RelayEnvironmentType,
  type MutationConfig,
} from '@tbergq/relay';

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
  environment: RelayEnvironmentType,
  variables: AddFavoriteMutationVariables,
  onCompleted: Function,
  configs?: $ReadOnlyArray<MutationConfig>,
) {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    configs,
  });
}
