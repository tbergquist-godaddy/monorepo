import Dataloader from 'dataloader';
import { Maybe } from 'types';

import WatchedEpisodeRepository, {
  IWatchedEpisodeRepository,
} from '../../infrastructure/watched-episode-repository';
import { IWatchedEpisode } from '../../infrastructure/entities/watched-episode';

const batchFn = async (
  episodeIds: ReadonlyArray<number>,
  userId: string,
  repository: IWatchedEpisodeRepository = new WatchedEpisodeRepository(),
) => {
  const episodes = await repository.getWatchedEpisodes(userId, [...episodeIds]);
  return episodeIds.map((id) => {
    return episodes.find((e) => e?.episodeId === id);
  });
};

export type EpisodeWatchedLoader = Dataloader<number, Maybe<IWatchedEpisode>>;

const makeWatchedEpisodeLoader = (userId: string): EpisodeWatchedLoader => {
  return new Dataloader<number, Maybe<IWatchedEpisode>>((args: ReadonlyArray<number>) =>
    batchFn(args, userId),
  );
};

export default makeWatchedEpisodeLoader;
