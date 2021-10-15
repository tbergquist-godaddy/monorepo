import { fetch } from 'crosscutting';

import { IEpisode, TvMazeEpisode } from './entities/episode';

export interface IEpisodeRepository {
  getByTvshowId(tvshowId: number): Promise<IEpisode[]>;
  getById(serieId: number): Promise<IEpisode>;
}

export default class EpisodeRepository {
  #fetchFn: typeof fetch;
  #baseUrl: string;

  constructor(fetchFn: typeof fetch = fetch, baseUrl = 'http://api.tvmaze.com') {
    this.#fetchFn = fetchFn;
    this.#baseUrl = baseUrl;
  }

  #mapToIEpisode(episode: TvMazeEpisode, tvshowId: number | null = null): IEpisode {
    return {
      id: episode.id,
      airdate: episode.airdate,
      image: episode.image,
      name: episode.name,
      number: episode.number,
      season: episode.season,
      summary: episode.summary,
      tvshowId,
    };
  }

  getById: (serieId: number) => Promise<IEpisode> = async (serieId: number) => {
    const res = await this.#fetchFn(`${this.#baseUrl}/episodes/${serieId}`);
    const episode = await res.json();
    return this.#mapToIEpisode(episode);
  };

  getByTvshowId: (tvshowId: number) => Promise<IEpisode[]> = async (tvshowId: number) => {
    const episodes = await this.#fetchFn(`${this.#baseUrl}/shows/${tvshowId}/episodes`);
    const json: ReadonlyArray<TvMazeEpisode> = await episodes.json();

    return json.map((episode) => this.#mapToIEpisode(episode, tvshowId));
  };
}
