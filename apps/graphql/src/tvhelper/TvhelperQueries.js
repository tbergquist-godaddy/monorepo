// @flow

import SearchTvShow from './search/queries/SearchTvShow';
import TvShowDetail from './tvshow/queries/TvShowDetail';
import Favorites from './tvshow/queries/Favorites';
import Episode from './episode/queries/Episode';

export default {
  searchTvShow: SearchTvShow,
  tvShowDetail: TvShowDetail,
  favorites: Favorites,
  episode: Episode,
};
