// @flow

import { UserRepository } from '@tbergq/tvhelper-persistence';

import SearchTvShowLoader from './src/search/dataloaders/SearchTvShowLoader';
import UserLoader from './src/account/dataloaders/UserLoader';

export default function getDataloaders() {
  return {
    searchTvShow: SearchTvShowLoader(),
    user: UserLoader(new UserRepository()),
  };
}
