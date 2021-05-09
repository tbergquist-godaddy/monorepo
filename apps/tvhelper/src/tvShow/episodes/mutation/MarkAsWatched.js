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
  environment: $FlowFixMe,
  variables: MarkAsWatchedMutationVariables,
  onCompleted: () => void,
) {
  commitMutation<MutationType>(environment, {
    variables,
    mutation,
    onCompleted,
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
