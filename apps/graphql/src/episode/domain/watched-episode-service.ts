import WatchedEpisodeRepository, {
  IWatchedEpisodeRepository,
} from '../infrastructure/watched-episode-repository';
import { IWatchedEpisodeDTO } from './dto/watched-episode-dto';
import makeDataLoader, { IsEpisodeWatchedLoader } from './dataloaders/is-episode-watched-loader';

type MaybeDTO = IWatchedEpisodeDTO | null | undefined;

export interface IWatchedEpisodeService {
  addWatchedEpisode: (episodeId: number) => Promise<MaybeDTO>;
  deleteWatchedEpisode: (episodeId: number) => Promise<boolean>;
  isEpisodeWatched: (episodeId: number) => Promise<boolean>;
}

export default class WatchedEpisodeService implements IWatchedEpisodeService {
  #userId: string;
  #repository: IWatchedEpisodeRepository;
  #isEpisodeWatchedLoader: IsEpisodeWatchedLoader;

  constructor(
    userId: string,
    isEpisodeWatchedLoader?: IsEpisodeWatchedLoader,
    repository: IWatchedEpisodeRepository = new WatchedEpisodeRepository(),
  ) {
    this.#userId = userId;
    this.#repository = repository;
    this.#isEpisodeWatchedLoader = isEpisodeWatchedLoader ?? makeDataLoader(userId);
  }

  isEpisodeWatched(episodeId: number): Promise<boolean> {
    return this.#isEpisodeWatchedLoader.load(episodeId);
  }

  deleteWatchedEpisode(episodeId: number): Promise<boolean> {
    return this.#repository.deleteWatchedEpisode(this.#userId, episodeId);
  }

  addWatchedEpisode(episodeId: number): Promise<MaybeDTO> {
    return this.#repository.addWatchedEpisode(this.#userId, episodeId);
  }
}
