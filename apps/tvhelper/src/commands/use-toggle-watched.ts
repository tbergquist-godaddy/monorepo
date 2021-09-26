import { graphql, readInlineData } from 'react-relay';
import { useToggleWatched$key } from '__generated__/useToggleWatched.graphql';

import useMarkAsWatched from './use-mark-as-watched';
import useMarkAsUnwatched from './use-delete-as-watched';

export default function useToggleWatched(fragmentRef: useToggleWatched$key): [() => void, boolean] {
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
      deleteAsWatchedMutation();
    } else if (data?.watched === false) {
      markAsWatchedMutation();
    }
  };

  return [toggle, deleteLoading || markLoading];
}
