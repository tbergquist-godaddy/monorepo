// @flow strict

import Dataloader from 'dataloader';

import type { TvShow, Episode } from './tvhelper/tvshow/TvShow';
import type { User } from './tvhelper/account/User';

export type GraphqlContextType = {|
  +dataLoader: {|
    +tvhelper: {|
      +searchTvShow: Dataloader<string, TvShow[]>,
      +user: Dataloader<string, ?User>,
      +tvDetail: Dataloader<string, TvShow>,
      +episodes: Dataloader<string, Episode[]>,
    |},
  |},
|};
