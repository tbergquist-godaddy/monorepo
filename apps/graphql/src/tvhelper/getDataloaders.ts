import Dataloader from 'dataloader';

import TvDetailLoader from './tvshow/dataloaders/TvDetailLoader';
import EpisodesLoader from './episode/dataloaders/EpisodesLoader';
import EpisodeLoader from './episode/dataloaders/EpisodeLoader';
import type { TvShow } from './tvshow/TvShow';
import type { Episode } from './episode/Episode';

export type TvHelperDataLoaders = {
  readonly tvDetail: Dataloader<string, TvShow>;
  readonly episodes: Dataloader<string, Episode[]>;
  readonly episode: Dataloader<string, Episode>;
};
export default function getDataloaders(): TvHelperDataLoaders {
  return {
    tvDetail: TvDetailLoader(),
    episodes: EpisodesLoader(),
    episode: EpisodeLoader(),
  };
}
