import { fetch } from 'crosscutting';
import ExternalRepository from 'services/external-repository';

import { IEpisode, TvMazeEpisode } from './entities/episode';

export interface IEpisodeRepository {
  getByTvshowId(tvshowId: number): Promise<IEpisode[]>;
  getById(serieId: number): Promise<IEpisode>;
}

export default class EpisodeRepository extends ExternalRepository implements IEpisodeRepository {
  #fetchFn: typeof fetch;

  constructor(baseUrl = 'https://api.themoviedb.org/3') {
    super(baseUrl);
    this.#fetchFn = fetch;
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
    const url = super.getUrl(`/episodes/${serieId}`, {});
    const res = await this.#fetchFn(`${this.#baseUrl}/episodes/${serieId}?embed=show`);
    const episode = await res.json();
    return this.#mapToIEpisode(episode, episode._embedded.show.id);
  };

  getByTvshowId: (tvshowId: number) => Promise<IEpisode[]> = async (tvshowId: number) => {
    const episodes = await this.#fetchFn(`${this.#baseUrl}/shows/${tvshowId}/episodes`);
    const json: ReadonlyArray<TvMazeEpisode> = await episodes.json();

    return json.map((episode) => this.#mapToIEpisode(episode, tvshowId));
  };
}
