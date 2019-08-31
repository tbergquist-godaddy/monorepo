// @flow

import SearchTvShowLoader from './src/search/dataloaders/SearchTvShowLoader';
import UserLoader from './src/account/dataloaders/UserLoader';
import TvDetailLoader from './src/tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './src/episode/dataloaders/EpisodesLoader';

export default function getDataloaders() {
  return {
    searchTvShow: SearchTvShowLoader(),
    user: UserLoader(),
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
  };
}
