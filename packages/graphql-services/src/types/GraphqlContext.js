// @flow strict

import Dataloader from 'dataloader';
import type { FavoriteType } from '@tbergq/tvhelper-persistence';

import type { TvShow, Episode } from './tvhelper/tvshow/TvShow';
import type { User } from './tvhelper/account/User';
import type { LoggedInUser } from '../shared/resolvers/LoginResolver';
import type { EpisodeWatched } from './tvhelper/episode/WatchedEpisode';

export type GraphqlContextType = {|
  +user: ?LoggedInUser,
  +dataLoader: {|
    +tvhelper: {|
      +searchTvShow: Dataloader<string, TvShow[]>,
      +user: Dataloader<string, ?User>,
      +tvDetail: Dataloader<string, TvShow>,
      +episodes: Dataloader<string, Episode[]>,
      +episode: Dataloader<string, Episode>,
      +favorites: Dataloader<string, FavoriteType[]>,
      +episodeWatched: Dataloader<number, EpisodeWatched>,
    |},
  |},
|};
