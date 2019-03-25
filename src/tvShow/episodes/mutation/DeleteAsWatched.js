// @flow

import { graphql, commitMutation } from '@tbergq/tvhelper-relay';

import type { DeleteAsWatchedMutationVariables } from './__generated__/DeleteAsWatchedMutation.graphql';

const mutation = graphql`
  mutation DeleteAsWatchedMutation($episodeId: ID!) {
    deleteWatchedEpisode(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

export default function deleteAsWatched(
  environment: Object,
  variables: DeleteAsWatchedMutationVariables,
) {
  commitMutation(environment, {
    variables,
    mutation,
    optimisticResponse: {
      deleteWatchedEpisode: {
        success: true,
        episode: {
          id: variables.episodeId,
          watched: false,
        },
      },
    },
  });
}
