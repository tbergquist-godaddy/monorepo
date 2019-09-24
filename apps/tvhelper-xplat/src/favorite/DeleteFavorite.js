// @flow

import {
  graphql,
  commitMutation,
  type RelayEnvironmentType,
  type MutationConfig,
} from '@tbergq/relay';

import type { DeleteFavoriteMutationVariables } from './__generated__/DeleteFavoriteMutation.graphql';

const mutation = graphql`
  mutation DeleteFavoriteMutation($serieId: ID!) {
    deleteFavorite(serieId: $serieId) {
      success
      id
    }
  }
`;

export default function deleteFavorite(
  environment: RelayEnvironmentType,
  variables: DeleteFavoriteMutationVariables,
  onCompleted: Function,
  configs?: $ReadOnlyArray<MutationConfig>,
) {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    configs,
    updater: store => {
      const payload = store.getRootField('deleteFavorite') ?? {};
      const success = payload.getValue('success') ?? false;

      if (success) {
        const serie = store.get(variables.serieId) ?? {};
        serie.setValue(false, 'isFavorite');
      }
    },
  });
}
