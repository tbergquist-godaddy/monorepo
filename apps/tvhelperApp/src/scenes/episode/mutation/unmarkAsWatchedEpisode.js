// @flow

import { commitMutation, graphql, type RelayEnvironmentType } from '@tbergq/relay';

import type {
  unmarkAsWatchedEpisodeMutationVariables,
  unmarkAsWatchedEpisodeMutationResponse,
} from './__generated__/unmarkAsWatchedEpisodeMutation.graphql';

const mutation = graphql`
  mutation unmarkAsWatchedEpisodeMutation($episodeId: ID!) {
    deleteWatchedEpisode(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

type Args = {|
  ...unmarkAsWatchedEpisodeMutationVariables,
  +onCompleted?: (response: unmarkAsWatchedEpisodeMutationResponse, error: Error) => void,
  +onError?: () => void,
|};

const deleteAsWatched = (
  environment: RelayEnvironmentType,
  { onCompleted, onError, episodeId }: Args,
) => {
  // $FlowFixMe
  commitMutation(environment, {
    mutation,
    variables: { episodeId },
    onCompleted,
    onError,
    optimisticResponse: {
      deleteWatchedEpisode: {
        success: true,
        episode: {
          id: episodeId,
          watched: false,
        },
      },
    },
  });
};

export default deleteAsWatched;
