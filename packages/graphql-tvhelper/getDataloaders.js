// @flow

import SearchTvShowLoader from './src/search/dataloaders/SearchTvShowLoader';

export default function getDataloaders() {
  return {
    searchTvShow: SearchTvShowLoader(),
  };
}
