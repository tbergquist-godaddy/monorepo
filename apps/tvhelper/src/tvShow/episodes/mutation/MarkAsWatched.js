// @flow

import { graphql, commitMutation } from '@tbergq/relay';

import type {
  MarkAsWatchedMutationVariables,
  MarkAsWatchedMutation as MutationType,
} from './__generated__/MarkAsWatchedMutation.graphql';

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
  commitMutation<MutationType>(environment, {
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
