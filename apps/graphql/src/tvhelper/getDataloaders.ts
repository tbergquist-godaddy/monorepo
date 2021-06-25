import Dataloader from 'dataloader';

import SearchTvShowLoader from './search/dataloaders/SearchTvShowLoader';
import TvDetailLoader from './tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './episode/dataloaders/EpisodesLoader';
import EpisodeLoader from './episode/dataloaders/EpisodeLoader';
import EpisodeWatchedLoader from './episode/dataloaders/EpisodeWatched';
import type { TvShow } from './tvshow/TvShow';
import type { Episode, EpisodeWatched } from './episode/Episode';

export type TvHelperDataLoaders = {
  readonly searchTvShow: Dataloader<string, TvShow[]>;
  readonly tvDetail: Dataloader<string, TvShow>;
  readonly episodes: Dataloader<string, Episode[]>;
  readonly episode: Dataloader<string, Episode>;
  readonly episodeWatched: Dataloader<number, EpisodeWatched>;
};
export default function getDataloaders(user: any | null | undefined): TvHelperDataLoaders {
  return {
    searchTvShow: SearchTvShowLoader(),
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
    episode: EpisodeLoader(),
    episodeWatched: EpisodeWatchedLoader(user),
  };
}
