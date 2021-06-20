import { FavoritesRepository } from '@tbergq/tvhelper-persistence';
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
  readonly searchTvShow: Dataloader<string, TvShow[]>;
  readonly user: Dataloader<string, User | null | undefined>;
  readonly tvDetail: Dataloader<string, TvShow>;
  readonly episodes: Dataloader<string, Episode[]>;
  readonly episode: Dataloader<string, Episode>;
  readonly favorites: Dataloader<string, any[]>;
  readonly episodeWatched: Dataloader<number, EpisodeWatched>;
};
export default function getDataloaders(user: any | null | undefined): TvHelperDataLoaders {
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
