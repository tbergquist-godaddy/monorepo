import { UseModel, Maybe } from 'types';

import useMarkAsWatched, { MarkAsWatchedConfig } from '../operations/mutations/use-mark-as-watched';
import useMarkAsUnwatched, {
  DeleteAsWatchedMutationConfig,
} from '../operations/mutations/use-delete-as-watched';

export type ToggleConfig = {
  deleteConfig?: DeleteAsWatchedMutationConfig;
  markAsWatchedConfig?: MarkAsWatchedConfig;
};

type Props = {
  episodeId: Maybe<string>;
  watched: Maybe<boolean>;
};

export type Model = {
  readonly isMutating: boolean;
};
export type Actions = {
  toggleEpisodeWatched: (config?: ToggleConfig) => void;
};

type UseEpisode = UseModel<Model, Actions>;

export default function useEpisode({ watched, episodeId }: Readonly<Props>): UseEpisode {
  const [deleteAsWatchedMutation, deleteLoading] = useMarkAsUnwatched(episodeId);
  const [markAsWatchedMutation, markLoading] = useMarkAsWatched(episodeId);

  const toggleEpisodeWatched = (config?: ToggleConfig) => {
    if (watched === true) {
      deleteAsWatchedMutation(config?.deleteConfig);
    } else if (watched === false) {
      markAsWatchedMutation(config?.markAsWatchedConfig);
    } else {
      // Some Logging
    }
  };

  return {
    models: { isMutating: markLoading || deleteLoading },
    operations: { toggleEpisodeWatched },
  };
}
