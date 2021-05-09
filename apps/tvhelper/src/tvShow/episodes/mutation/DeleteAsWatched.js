// @flow

import { graphql, commitMutation } from '@tbergq/relay';

import type {
  DeleteAsWatchedMutationVariables,
  DeleteAsWatchedMutation as MutationType,
} from './__generated__/DeleteAsWatchedMutation.graphql';

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
  environment: $FlowFixMe,
  variables: DeleteAsWatchedMutationVariables,
  onCompleted: () => void,
) {
  commitMutation<MutationType>(environment, {
    variables,
    mutation,
    onCompleted,
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
