import WatchedEpisodeRepository, {
  IWatchedEpisodeRepository,
} from '../infrastructure/watched-episode-repository';
import { IWatchedEpisodeDTO } from './dto/watched-episode-dto';
import makeDataLoader, { EpisodeWatchedLoader } from './dataloaders/episode-watched-loader';

type MaybeDTO = IWatchedEpisodeDTO | null | undefined;

export interface IWatchedEpisodeService {
  addWatchedEpisode: (episodeId: number) => Promise<MaybeDTO>;
  deleteWatchedEpisode: (episodeId: number) => Promise<boolean>;
  isEpisodeWatched: (episodeId: number) => Promise<boolean>;
  getWatchedEpisode: (episodeId: number) => Promise<MaybeDTO>;
}

export default class WatchedEpisodeService implements IWatchedEpisodeService {
  #userId: string;
  #repository: IWatchedEpisodeRepository;
  #episodeWatchedLoader: EpisodeWatchedLoader;

  constructor(
    userId: string,
    episodeWatchedLoader?: EpisodeWatchedLoader,
    repository: IWatchedEpisodeRepository = new WatchedEpisodeRepository(),
  ) {
    this.#userId = userId;
    this.#repository = repository;
    this.#episodeWatchedLoader = episodeWatchedLoader ?? makeDataLoader(userId);
  }

  #getEpisode: (id: number) => Promise<MaybeDTO> = async (id: number) => {
    const episode = await this.#episodeWatchedLoader.load(id);

    if (episode == null) {
      return null;
    }
    const { createdAt, ...rest } = episode;
    return {
      ...rest,
      date: createdAt,
    };
  };

  async isEpisodeWatched(episodeId: number): Promise<boolean> {
    const episode = await this.#getEpisode(episodeId);
    return episode != null;
  }

  getWatchedEpisode(episodeId: number): Promise<MaybeDTO> {
    return this.#getEpisode(episodeId);
  }

  deleteWatchedEpisode(episodeId: number): Promise<boolean> {
    return this.#repository.deleteWatchedEpisode(this.#userId, episodeId);
  }

  addWatchedEpisode(episodeId: number): Promise<MaybeDTO> {
    return this.#repository.addWatchedEpisode(this.#userId, episodeId);
  }
}
