// @flow

import {
  graphql,
  commitMutation,
  type RelayEnvironmentType,
  type MutationConfig,
} from '@tbergq/relay';

import type {
  deleteFavoriteMutationVariables,
  deleteFavoriteMutation as MutationType,
} from './__generated__/deleteFavoriteMutation.graphql';

const mutation = graphql`
  mutation deleteFavoriteMutation($serieId: ID!) {
    deleteFavorite(serieId: $serieId) {
      success
      id
    }
  }
`;

export default function deleteFavorite(
  environment: RelayEnvironmentType,
  variables: deleteFavoriteMutationVariables,
  onCompleted: Function,
  configs?: $ReadOnlyArray<MutationConfig>,
) {
  commitMutation<MutationType>(environment, {
    mutation,
    variables,
    onCompleted,
    configs,
    updater: (store) => {
      const payload = store.getRootField('deleteFavorite') ?? {};
      const success = payload.getValue('success') ?? false;

      if (success === true) {
        const serie = store.get(variables.serieId) ?? {};
        serie.setValue(false, 'isFavorite');
      }
    },
  });
}
