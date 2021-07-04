import Dataloader from 'dataloader';

import { IEpisode } from '../../infrastructure/entities/episode';
import EpisodeRepository, { IEpisodeRepository } from '../../infrastructure/episode-repository';

const batchFn = (tvshowIds: ReadonlyArray<number>, repository: IEpisodeRepository) => {
  return Promise.all(tvshowIds.map((tvshowId) => repository.getByTvshowId(tvshowId)));
};

export type EpisodesLoader = Dataloader<number, IEpisode[]>;

export default function makeEpisodesLoader(): EpisodesLoader {
  return new Dataloader<number, IEpisode[]>((tvshowIds: ReadonlyArray<number>) =>
    batchFn(tvshowIds, new EpisodeRepository()),
  );
}
