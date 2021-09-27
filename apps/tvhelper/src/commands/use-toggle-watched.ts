import { graphql, readInlineData } from 'react-relay';
import { useToggleWatched$key } from '__generated__/useToggleWatched.graphql';

import useMarkAsWatched, { MarkAsWatchedConfig } from './use-mark-as-watched';
import useMarkAsUnwatched, { DeleteAsWatchedMutationConfig } from './use-delete-as-watched';

export type ToggleConfig = {
  deleteConfig?: DeleteAsWatchedMutationConfig;
  markAsWatchedConfig?: MarkAsWatchedConfig;
};

export default function useToggleWatched(
  fragmentRef: useToggleWatched$key,
  config?: ToggleConfig,
): [() => void, boolean] {
  const data = readInlineData(
    graphql`
      fragment useToggleWatched on Episode @inline {
        id
        watched
      }
    `,
    fragmentRef,
  );
  const episodeId = data?.id;

  const [deleteAsWatchedMutation, deleteLoading] = useMarkAsUnwatched(episodeId);
  const [markAsWatchedMutation, markLoading] = useMarkAsWatched(episodeId);

  const toggle = () => {
    if (data?.watched === true) {
      deleteAsWatchedMutation(config?.deleteConfig);
    } else if (data?.watched === false) {
      markAsWatchedMutation(config?.markAsWatchedConfig);
    }
  };

  return [toggle, deleteLoading || markLoading];
}
