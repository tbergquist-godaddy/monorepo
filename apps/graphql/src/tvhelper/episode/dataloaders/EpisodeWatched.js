// @flow

import DataLoader from 'dataloader';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';
import type { LoggedInUser } from '@tbergq/graphql-services';

import type { EpisodeWatched } from '../Episode';

const loadWatchedEpisode = async (args: $ReadOnlyArray<number>, user: ?LoggedInUser) => {
  const watchedEpisodes = await await WatchedEpisodeRepository.findEpisodes(user?.id, args);

  // $FlowFixMe[incompatible-use] $FlowFixMe(>=<150.1>)
  // $FlowFixMe[incompatible-call] $FlowFixMe(>=<150.1>)
  return args.map((arg) => watchedEpisodes.find((episode) => episode.episodeId === arg));
};

const EpisodeWatchedLoader = (user: ?LoggedInUser): DataLoader<number, EpisodeWatched, number> =>
  new DataLoader<number, EpisodeWatched>((args: $ReadOnlyArray<number>) =>
    loadWatchedEpisode(args, user),
  );

export default EpisodeWatchedLoader;
