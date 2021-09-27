import { Disposable, graphql, useMutation, UseMutationConfig } from 'react-relay';
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

type MutateConfig = Omit<UseMutationConfig<MutationType>, 'variables'>;
export type MarkAsWatchedConfig = MutateConfig;

export default function useMarkAsWatched(
  episodeId: string,
): [(config?: MutateConfig) => Disposable, boolean] {
  const [markAsWatched, loading] = useMutation<MutationType>(mutation);
  const mutate = (config?: UseMutationConfig<MutationType>) => {
    return markAsWatched({
      variables: { episodeId },
      optimisticResponse: {
        markAsWatched: {
          success: true,
          episode: {
            id: episodeId,
            watched: true,
          },
        },
      },
      ...config,
    });
  };

  return [mutate, loading];
}
