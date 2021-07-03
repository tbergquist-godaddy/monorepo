import { log, fetch } from 'crosscutting';

import { ITvshow, SearchTvShowResponse } from './entities/tvshow';

export interface ITvshowRepository {
  search: (query: string) => Promise<ITvshow[]>;
}

export default class TvshowRepository implements ITvshowRepository {
  #fetchFn: typeof fetch;
  #baseUrl: string;

  constructor(fetchFn: typeof fetch = fetch, baseUrl = 'http://api.tvmaze.com') {
    this.#fetchFn = fetchFn;
    this.#baseUrl = baseUrl;
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
