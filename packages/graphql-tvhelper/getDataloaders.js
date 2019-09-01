// @flow

import { FavoritesRepository } from '@tbergq/tvhelper-persistence';

import SearchTvShowLoader from './src/search/dataloaders/SearchTvShowLoader';
import UserLoader from './src/account/dataloaders/UserLoader';
import TvDetailLoader from './src/tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './src/episode/dataloaders/EpisodesLoader';
import EpisodeLoader from './src/episode/dataloaders/EpisodeLoader';
import FavoritesLoader from './src/tvshow/dataloaders/FavoritesLoader';

export default function getDataloaders() {
  const favoritesRepository = new FavoritesRepository();
  return {
    searchTvShow: SearchTvShowLoader(),
    user: UserLoader(),
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
    episode: EpisodeLoader(),
    favorites: FavoritesLoader(favoritesRepository),
  };
}
