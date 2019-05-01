// @flow

import { graphql, commitMutation } from '@tbergq/relay';

import type { MarkAsWatchedMutationVariables } from './__generated__/MarkAsWatchedMutation.graphql';

const mutation = graphql`
  mutation MarkAsWatchedMutation($episodeId: ID!) {
    markAsWatched(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

export default function markAsWatched(
  environment: Object,
  variables: MarkAsWatchedMutationVariables,
) {
  commitMutation(environment, {
    variables,
    mutation,
    optimisticResponse: {
      markAsWatched: {
        success: true,
        episode: {
          id: variables.episodeId,
          watched: true,
        },
      },
    },
  });
}
