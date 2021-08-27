import { log } from 'crosscutting';
import { IFavoriteService } from 'favorite';

import { IEpisode } from '../infrastructure/entities/episode';
import makeEpisodesLoader, { EpisodesLoader } from './dataloaders/episodes-loader';
import { IEpisodeDTO } from './dto/episode-dto';
import { IWatchedEpisodeService } from './watched-episode-service';

export interface IEpisodeService {
  getByTvshowId(tvshowId: number): Promise<IEpisodeDTO[]>;
  getNotSeenEpisodes(userId: string): Promise<IEpisodeDTO[]>;
}

type EpisodeServiceConstructor = {
  favoriteService: IFavoriteService;
  watchedEpisodeService: IWatchedEpisodeService;
  episodesLoader?: EpisodesLoader;
};
export default class EpisodeService implements IEpisodeService {
  #episodesLoader: EpisodesLoader;
  #favoriteService: IFavoriteService;
  #watchedEpisodeService: IWatchedEpisodeService;

  constructor({
    favoriteService,
    episodesLoader = makeEpisodesLoader(),
    watchedEpisodeService,
  }: EpisodeServiceConstructor) {
    this.#episodesLoader = episodesLoader;
    this.#favoriteService = favoriteService;
    this.#watchedEpisodeService = watchedEpisodeService;
  }

  mapToDTO(episode: IEpisode): IEpisodeDTO {
    return {
      ...episode,
      seasonAndNumber: `S${episode.season.toString().padStart(2, '0')}E${episode.number
        .toString()
        .padStart(2, '0')}`,
    };
  }

  async getNotSeenEpisodes(userId: string): Promise<IEpisodeDTO[]> {
    const favorites = await this.#favoriteService.getFavorites(userId);
    const favoriteIds = favorites.map((i) => i.serieId);

    const episodesByShow = await this.#episodesLoader.loadMany(favoriteIds);
    const episodes: Array<IEpisodeDTO> = [];

    for (const episode of episodesByShow) {
      if (episode instanceof Error) {
        continue;
      }
      episodes.push(
        ...episode.reduce<IEpisodeDTO[]>((acc, curr) => {
          if (new Date(curr.airdate) > new Date()) {
            return acc;
          }
          return [...acc, this.mapToDTO(curr)];
        }, []),
      );
    }

    const watched = await Promise.all(
      episodes.map((e) => {
        return this.#watchedEpisodeService.isEpisodeWatched(e.id);
      }),
    );

    const notSeen = [];

    for (let i = 0; i < episodes.length; i++) {
      if (watched[i] === false) {
        notSeen.push(episodes[i]);
      }
    }

    return notSeen;
  }

  async getByTvshowId(tvshowId: number): Promise<IEpisodeDTO[]> {
    try {
      const episodes = await this.#episodesLoader.load(tvshowId);

      return episodes.map(this.mapToDTO);
    } catch (error) {
      log('Failed to fetch episodes', { tvshowId }, error);
      return [];
    }
  }
}
