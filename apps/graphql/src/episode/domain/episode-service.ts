import { log } from 'crosscutting';
import { IFavoriteService } from 'favorite';

import { IEpisode } from '../infrastructure/entities/episode';
import makeEpisodesLoader, { EpisodesLoader } from './dataloaders/episodes-loader';
import { IEpisodeDTO } from './dto/episode-dto';
import { IWatchedEpisodeService } from './watched-episode-service';
import makeEpisodeLoader, { EpisodeLoader } from './dataloaders/episode-loader';

export interface IEpisodeService {
  getByTvshowId(tvshowId: number): Promise<IEpisodeDTO[]>;
  getNotSeenEpisodes(userId: string): Promise<IEpisodeDTO[]>;
  getEpisode(episodeId: number): Promise<IEpisodeDTO>;
}

type EpisodeServiceConstructor = {
  favoriteService: IFavoriteService;
  watchedEpisodeService: IWatchedEpisodeService;
  episodesLoader?: EpisodesLoader;
  episodeLoader?: EpisodeLoader;
};

export default class EpisodeService implements IEpisodeService {
  #episodesLoader: EpisodesLoader;
  #favoriteService: IFavoriteService;
  #watchedEpisodeService: IWatchedEpisodeService;
  #episodeLoader: EpisodeLoader;

  constructor({
    favoriteService,
    episodesLoader = makeEpisodesLoader(),
    episodeLoader = makeEpisodeLoader(),
    watchedEpisodeService,
  }: EpisodeServiceConstructor) {
    this.#episodesLoader = episodesLoader;
    this.#favoriteService = favoriteService;
    this.#watchedEpisodeService = watchedEpisodeService;
    this.#episodeLoader = episodeLoader;
  }

  mapToDTO(episode: IEpisode): IEpisodeDTO {
    return {
      ...episode,
      seasonAndNumber: `S${episode.season.toString().padStart(2, '0')}E${episode.number
        .toString()
        .padStart(2, '0')}`,
    };
  }

  getEpisode: (episodeId: number) => Promise<IEpisodeDTO> = async (episodeId: number) => {
    const episode = await this.#episodeLoader.load(episodeId);
    return this.mapToDTO(episode);
  };

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
          if (curr.airdate === '' || new Date(curr.airdate) > new Date()) {
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

    return notSeen.sort((a, b) => {
      // Newest first
      if (new Date(a.airdate) > new Date(b.airdate)) {
        return -1;
      } else if (new Date(a.airdate) < new Date(b.airdate)) {
        return 1;
      }
      return 0;
    });
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
