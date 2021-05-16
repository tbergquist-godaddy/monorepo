import { graphql, useMutation } from 'react-relay';
import type { useMarkAsWatchedMutation as MutationType } from '__generated__/useMarkAsWatchedMutation.graphql';

const mutation = graphql`
  mutation useMarkAsWatchedMutation($episodeId: ID!) {
    markAsWatched(episodeId: $episodeId) {
      success
      episode {
        id
        watched
      }
    }
  }
`;

export default function useMarkAsWatched() {
  return useMutation<MutationType>(mutation);
}
