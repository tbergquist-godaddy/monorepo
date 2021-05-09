// @flow

import {
  graphql,
  commitMutation,
  type RelayEnvironmentType,
  type MutationConfig,
} from '@tbergq/relay';

import type {
  addFavoriteMutationVariables,
  addFavoriteMutation as MutationType,
} from './__generated__/addFavoriteMutation.graphql';

const mutation = graphql`
  mutation addFavoriteMutation($serieId: ID!) {
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
  variables: addFavoriteMutationVariables,
  onCompleted: $FlowFixMe,
  configs?: $ReadOnlyArray<MutationConfig>,
) {
  commitMutation<MutationType>(environment, {
    mutation,
    variables,
    onCompleted,
    configs,
  });
}
