import Dataloader from 'dataloader';

import WatchedEpisodeRepository, {
  IWatchedEpisodeRepository,
} from '../../infrastructure/watched-episode-repository';

const batchFn = async (
  episodeIds: ReadonlyArray<number>,
  repository: IWatchedEpisodeRepository,
  userId: string,
) => {
  const episodes = await repository.isWatched(userId, [...episodeIds]);
  return episodeIds.map((id) => {
    return episodes.some((episode) => {
      return episode?.episodeId === id;
    });
  });
};

export type IsEpisodeWatchedLoader = Dataloader<number, boolean>;

const makeIsWatchedLoader = (userId: string): IsEpisodeWatchedLoader => {
  return new Dataloader<number, boolean>((args: ReadonlyArray<number>) =>
    batchFn(args, new WatchedEpisodeRepository(), userId),
  );
};

export default makeIsWatchedLoader;
