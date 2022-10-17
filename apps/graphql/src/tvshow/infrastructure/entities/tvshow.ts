import { SearchResults, TvShowServer as _TvShowServer } from './tmdb-types';

export type TvShowServer = _TvShowServer;
export type SearchTvShowResponse = SearchResults;
export interface ITvshow {
  id: number;
  name: string;
  status?: string;
  premiered?: string;
  image?: {
    medium: string;
    original: string;
  };
  posterPath?: string;
  rating: number;
  summary: string;
  network?: {
    id: number;
    name: string;
  };
  previousEpisode?: string;
  nextEpisode?: string | null | undefined;
}
