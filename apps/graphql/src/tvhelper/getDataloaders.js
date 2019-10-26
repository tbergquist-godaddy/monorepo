// @flow

import { FavoritesRepository } from '@tbergq/tvhelper-persistence';
import type { LoggedInUser } from '@tbergq/graphql-services';

import SearchTvShowLoader from './search/dataloaders/SearchTvShowLoader';
import UserLoader from './account/dataloaders/UserLoader';
import TvDetailLoader from './tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './episode/dataloaders/EpisodesLoader';
import EpisodeLoader from './episode/dataloaders/EpisodeLoader';
import FavoritesLoader from './tvshow/dataloaders/FavoritesLoader';
import EpisodeWatchedLoader from './episode/dataloaders/EpisodeWatched';

export default function getDataloaders(user: ?LoggedInUser) {
  const favoritesRepository = new FavoritesRepository();
  return {
    searchTvShow: SearchTvShowLoader(),
    user: UserLoader(),
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
    episode: EpisodeLoader(),
    favorites: FavoritesLoader(favoritesRepository),
    episodeWatched: EpisodeWatchedLoader(user),
  };
}
