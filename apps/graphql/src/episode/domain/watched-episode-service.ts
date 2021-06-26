import WatchedEpisodeRepository, {
  IWatchedEpisodeRepository,
} from '../infrastructure/watched-episode-repository';
import { IWatchedEpisodeDTO } from './dto/watched-episode-dto';

type MaybeDTO = IWatchedEpisodeDTO | null | undefined;

export interface IWatchedEpisodeService {
  addWatchedEpisode: (userId: string, episodeId: number) => Promise<MaybeDTO>;
}
export default class WatchedEpisodeService implements IWatchedEpisodeService {
  #repository: IWatchedEpisodeRepository;

  constructor(repository: IWatchedEpisodeRepository = new WatchedEpisodeRepository()) {
    this.#repository = repository;
  }

  addWatchedEpisode(userId: string, episodeId: number): Promise<MaybeDTO> {
    return this.#repository.addWatchedEpisode(userId, episodeId);
  }
}
