// @flow

import { graphql, useMutation } from 'react-relay';
import type { useDeleteAsWatchedMutation as MutationType } from '__generated__/useDeleteAsWatchedMutation.graphql';

const mutation = graphql`
  mutation useDeleteAsWatchedMutation($episodeId: ID!) {
    deleteWatchedEpisode(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

export default function useDeleteAsWatched() {
  return useMutation<MutationType>(mutation);
}
