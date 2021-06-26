import WatchedEpisodeRepository, {
  IWatchedEpisodeRepository,
} from '../infrastructure/watched-episode-repository';
import { IWatchedEpisodeDTO } from './dto/watched-episode-dto';

type MaybeDTO = IWatchedEpisodeDTO | null | undefined;

export interface IWatchedEpisodeService {
  addWatchedEpisode: (userId: string, episodeId: number) => Promise<MaybeDTO>;
  deleteWatchedEpisode: (userId: string, episodeId: number) => Promise<boolean>;
}
export default class WatchedEpisodeService implements IWatchedEpisodeService {
  #repository: IWatchedEpisodeRepository;

  constructor(repository: IWatchedEpisodeRepository = new WatchedEpisodeRepository()) {
    this.#repository = repository;
  }

  deleteWatchedEpisode(userId: string, episodeId: number): Promise<boolean> {
    return this.#repository.deleteWatchedEpisode(userId, episodeId);
  }

  addWatchedEpisode(userId: string, episodeId: number): Promise<MaybeDTO> {
    return this.#repository.addWatchedEpisode(userId, episodeId);
  }
}
