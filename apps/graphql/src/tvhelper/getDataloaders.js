// @flow

import { FavoritesRepository, type FavoriteType } from '@tbergq/tvhelper-persistence';
import type { LoggedInUser } from '@tbergq/graphql-services';
import Dataloader from 'dataloader';

import SearchTvShowLoader from './search/dataloaders/SearchTvShowLoader';
import UserLoader from './account/dataloaders/UserLoader';
import TvDetailLoader from './tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './episode/dataloaders/EpisodesLoader';
import EpisodeLoader from './episode/dataloaders/EpisodeLoader';
import FavoritesLoader from './tvshow/dataloaders/FavoritesLoader';
import EpisodeWatchedLoader from './episode/dataloaders/EpisodeWatched';
import type { TvShow } from './tvshow/TvShow';
import type { Episode, EpisodeWatched } from './episode/Episode';
import type { User } from './account/Account';

export type TvHelperDataLoaders = {
  +searchTvShow: Dataloader<string, TvShow[]>,
  +user: Dataloader<string, ?User>,
  +tvDetail: Dataloader<string, TvShow>,
  +episodes: Dataloader<string, Episode[]>,
  +episode: Dataloader<string, Episode>,
  +favorites: Dataloader<string, FavoriteType[]>,
  +episodeWatched: Dataloader<number, EpisodeWatched>,
};

export default function getDataloaders(user: ?LoggedInUser): TvHelperDataLoaders {
  const favoritesRepository = new FavoritesRepository();
  return {
    searchTvShow: SearchTvShowLoader(),
    user: UserLoader(),
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
    episode: EpisodeLoader(),
    favorites: FavoritesLoader(favoritesRepository),
    episodeWatched: EpisodeWatchedLoader(user),
  };
}
