import Dataloader from 'dataloader';
import { IEpisode } from 'episode/infrastructure/entities/episode';

import EpisodeRepository, { IEpisodeRepository } from '../../infrastructure/episode-repository';

const batchFn = (
  serieIds: ReadonlyArray<number>,
  repository: IEpisodeRepository = new EpisodeRepository(),
): Promise<ReadonlyArray<IEpisode>> => {
  return Promise.all(serieIds.map(repository.getById));
};

export type EpisodeLoader = Dataloader<number, IEpisode>;

const makeDataLoader = (): EpisodeLoader => {
  return new Dataloader(batchFn);
};

export default makeDataLoader;
