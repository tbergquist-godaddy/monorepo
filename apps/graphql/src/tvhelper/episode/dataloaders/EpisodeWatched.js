// @flow

import Dataloader from 'dataloader';
import { WatchedEpisodeRepository } from '@tbergq/tvhelper-persistence';
import type { LoggedInUser } from '@tbergq/graphql-services';

import type { EpisodeWatched } from '../Episode';

const loadWatchedEpisode = async (args: $ReadOnlyArray<number>, user: ?LoggedInUser) => {
  const watchedEpisodes = await WatchedEpisodeRepository.findEpisodes(user?.id, args);

  return args.map(arg => watchedEpisodes.find(episode => episode.episodeId === arg));
};

const EpisodeWatchedLoader = (user: ?LoggedInUser) =>
  new Dataloader<number, EpisodeWatched>((args: $ReadOnlyArray<number>) =>
    loadWatchedEpisode(args, user),
  );

export default EpisodeWatchedLoader;
