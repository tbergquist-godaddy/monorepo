// @flow

import { graphql, commitMutation } from '@tbergq/relay';

import type { DeleteFavoriteMutationVariables } from './__generated__/DeleteFavoriteMutation.graphql';

const mutation = graphql`
  mutation DeleteFavoriteMutation($serieId: ID!) {
    deleteFavorite(serieId: $serieId) {
      success
    }
  }
`;

export default function deleteFavorite(
  environment: $FlowFixMe,
  variables: DeleteFavoriteMutationVariables,
  onCompleted: Function,
) {
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
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
