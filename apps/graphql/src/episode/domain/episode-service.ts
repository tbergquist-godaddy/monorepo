import { log } from 'crosscutting';

import makeEpisodesLoader, { EpisodesLoader } from './dataloaders/episodes-loader';
import { IEpisodeDTO } from './dto/episode-dto';

export interface IEpisodeService {
  getByTvshowId(tvshowId: number): Promise<IEpisodeDTO[]>;
}

export default class EpisodeService implements IEpisodeService {
  #episodesLoader: EpisodesLoader;

  constructor(episodesLoader: EpisodesLoader = makeEpisodesLoader()) {
    this.#episodesLoader = episodesLoader;
  }

  async getByTvshowId(tvshowId: number): Promise<IEpisodeDTO[]> {
    try {
      const episodes = await this.#episodesLoader.load(tvshowId);

      return episodes.map((episode) => ({
        ...episode,
        seasonAndNumber: `S${episode.season.toString().padStart(2, '0')}E${episode.number
          .toString()
          .padStart(2, '0')}`,
      }));
    } catch (error) {
      log('Failed to fetch episodes', { tvshowId }, error);
      return [];
    }
  }
}
