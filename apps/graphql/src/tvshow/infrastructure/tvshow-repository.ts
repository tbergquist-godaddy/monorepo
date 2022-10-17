import { log, fetch } from 'crosscutting';
import { TMDB_API_KEY } from 'environment';
import ExternalRepository from 'services/external-repository';

import { ITvshow, SearchTvShowResponse, TvShowServer } from './entities/tvshow';

export interface ITvshowRepository {
  search: (query: string) => Promise<ITvshow[]>;
  getById: (id: number) => Promise<ITvshow | null>;
}

export default class TvshowRepository extends ExternalRepository implements ITvshowRepository {
  #fetchFn: typeof fetch;

  constructor(fetchFn: typeof fetch = fetch, baseUrl = 'https://api.themoviedb.org/3') {
    super(baseUrl);
    this.#fetchFn = fetchFn;
  }

  getUrl(pathname: string, urlParams?: Record<string, string> | undefined): string {
    return super.getUrl(pathname, {
      ...urlParams,
      api_key: TMDB_API_KEY,
    });
  }

  async getById(id: number): Promise<ITvshow | null> {
    try {
      const response = await this.#fetchFn(this.getUrl(`/tv/${id}`));
      const serverData: TvShowServer = await response.json();
      return {
        id: serverData.id,
        name: serverData.name,
        posterPath: serverData.poster_path,
        network: serverData.networks[0],
        premiered: serverData.first_air_date,
        summary: serverData.overview,
        status: serverData.status,
        rating: serverData.vote_average,
      };
    } catch (error) {
      log('Failed to fetch tvshow', { id }, error);
      return null;
    }
  }

  async search(query: string): Promise<ITvshow[]> {
    try {
      const response = await this.#fetchFn(this.getUrl('/search/tv', { query }));
      const json: SearchTvShowResponse = await response.json();
      const results = json.results;
      return results.map((show) => {
        // TODO: Fetch from https://developers.themoviedb.org/3/configuration/get-api-configuration
        return {
          id: show.id,
          name: show.name,
          posterPath: show.poster_path,
          summary: show.overview,
          rating: show.vote_average,
        };
      });
    } catch (error) {
      log('Failed to fetch tvshows', error);
      return [];
    }
  }
}
