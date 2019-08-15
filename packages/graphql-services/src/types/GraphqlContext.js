// @flow strict

import Dataloader from 'dataloader';

import type { TvShow } from './tvhelper/tvshow/TvShow';

export type GraphqlContextType = {|
  +dataLoader: {|
    +tvhelper: {|
      +searchTvShow: Dataloader<string, Array<TvShow>>,
    |},
  |},
|};
