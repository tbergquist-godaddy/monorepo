// @flow

import { commitMutation, graphql, type RelayEnvironmentType } from '@tbergq/relay';

import type { markAsWatchedEpisodeMutation } from './__generated__/markAsWatchedEpisodeMutation.graphql';

const mutation = graphql`
  mutation markAsWatchedEpisodeMutation($episodeId: ID!) {
    markAsWatched(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

type Args = {|
  +onCompleted?: (response: markAsWatchedEpisodeMutation, error: Error) => void,
  +onError?: () => void,
  +episodeId: string,
|};

const markAsWatched = (
  environment: RelayEnvironmentType,
  { onCompleted, onError, episodeId }: Args,
) => {
  commitMutation(environment, {
    mutation,
    variables: { episodeId },
    // $FlowFixMe
    onCompleted,
    onError,
    optimisticResponse: {
      markAsWatched: {
        success: true,
        episode: {
          id: episodeId,
          watched: true,
        },
      },
    },
  });
};

export default markAsWatched;
