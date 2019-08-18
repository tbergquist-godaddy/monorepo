// @flow strict

import Dataloader from 'dataloader';

import type { TvShow } from './tvhelper/tvshow/TvShow';
import type { User } from './tvhelper/account/User';

export type GraphqlContextType = {|
  +dataLoader: {|
    +tvhelper: {|
      +searchTvShow: Dataloader<string, Array<TvShow>>,
      +user: Dataloader<string, ?User>,
    |},
  |},
|};
