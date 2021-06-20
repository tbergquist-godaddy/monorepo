import DataLoader from 'dataloader';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';

import type { EpisodeWatched } from '../Episode';

type LoggedInUser = any;

const loadWatchedEpisode = async (args: ReadonlyArray<number>, user: LoggedInUser) => {
  const watchedEpisodes = await await WatchedEpisodeRepository.findEpisodes(user?.id, args);

  return args.map((arg) => watchedEpisodes.find((episode: any) => episode.episodeId === arg));
};

const EpisodeWatchedLoader = (user: LoggedInUser): DataLoader<number, EpisodeWatched, number> =>
  new DataLoader<number, EpisodeWatched>((args: ReadonlyArray<number>) =>
    loadWatchedEpisode(args, user),
  );

export default EpisodeWatchedLoader;
