import { fetch } from 'crosscutting';

import { IEpisode, TvMazeEpisode } from './entities/episode';

export interface IEpisodeRepository {
  getByTvshowId(tvshowId: number): Promise<IEpisode[]>;
}

export default class EpisodeRepository {
  #fetchFn: typeof fetch;
  #baseUrl: string;

  constructor(fetchFn: typeof fetch = fetch, baseUrl = 'http://api.tvmaze.com') {
    this.#fetchFn = fetchFn;
    this.#baseUrl = baseUrl;
  }

  async getByTvshowId(tvshowId: number): Promise<IEpisode[]> {
    const episodes = await this.#fetchFn(`${this.#baseUrl}/shows/${tvshowId}/episodes`);
    const json: ReadonlyArray<TvMazeEpisode> = await episodes.json();

    return json.map((episode) => ({
      id: episode.id,
      airdate: episode.airdate,
      image: episode.image,
      name: episode.name,
      number: episode.number,
      season: episode.season,
      summary: episode.summary,
      tvshowId,
    }));
  }
}
