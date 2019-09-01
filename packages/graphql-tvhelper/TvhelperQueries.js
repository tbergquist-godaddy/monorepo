// @flow

import SearchTvShow from './src/search/queries/SearchTvShow';
import TvShowDetail from './src/tvshow/queries/TvShowDetail';
import Favorites from './src/tvshow/queries/Favorites';
import Episode from './src/episode/queries/Episode';

export default {
  searchTvShow: SearchTvShow,
  tvShowDetail: TvShowDetail,
  favorites: Favorites,
  episode: Episode,
};
