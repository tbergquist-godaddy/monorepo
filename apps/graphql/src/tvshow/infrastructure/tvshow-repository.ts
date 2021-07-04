import { log, fetch } from 'crosscutting';

import { ITvshow, SearchTvShowResponse, TvShowServer } from './entities/tvshow';

export interface ITvshowRepository {
  search: (query: string) => Promise<ITvshow[]>;
  getById: (id: number) => Promise<ITvshow | null>;
}

export default class TvshowRepository implements ITvshowRepository {
  #fetchFn: typeof fetch;
  #baseUrl: string;

  constructor(fetchFn: typeof fetch = fetch, baseUrl = 'http://api.tvmaze.com') {
    this.#fetchFn = fetchFn;
    this.#baseUrl = baseUrl;
  }

  async getById(id: number): Promise<ITvshow | null> {
    try {
      const response = await this.#fetchFn(`${this.#baseUrl}/shows/${id}`);
      const serverData: TvShowServer = await response.json();

      return {
        id: serverData.id,
        name: serverData.name,
        image: serverData.image,
        network: serverData.network,
        premiered: serverData.premiered,
        summary: serverData.summary,
        status: serverData.status,
        rating: serverData.rating.average,
      };
    } catch (error) {
      log('Failed to fetch tvshow', { id }, error);
      return null;
    }
  }

  async search(query: string): Promise<ITvshow[]> {
    try {
      const response = await this.#fetchFn(
        `${this.#baseUrl}/search/shows?q=${encodeURIComponent(query)}`,
      );
      const json: SearchTvShowResponse = await response.json();

      return json.map(({ show }) => {
        return {
          id: show.id,
          name: show.name,
          image: show.image,
          network: show.network,
          premiered: show.premiered,
          summary: show.summary,
          status: show.status,
          rating: show.rating.average,
        };
      });
    } catch (error) {
      log('Failed to fetch tvshows', error);
      return [];
    }
  }
}
