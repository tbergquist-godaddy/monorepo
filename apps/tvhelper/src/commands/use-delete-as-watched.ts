import { Disposable, graphql, useMutation, UseMutationConfig } from 'react-relay';
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

type MutateConfig = Omit<UseMutationConfig<MutationType>, 'variables'>;

export default function useDeleteAsWatched(
  episodeId: string,
): [(config: MutateConfig) => Disposable, boolean] {
  const [markAsNotWatched, loading] = useMutation<MutationType>(mutation);

  const mutate = (config: MutateConfig) => {
    return markAsNotWatched({
      variables: { episodeId },
      ...config,
    });
  };
  return [mutate, loading];
}
