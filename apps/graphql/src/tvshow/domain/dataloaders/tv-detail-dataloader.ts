import Dataloader from 'dataloader';

import TvshowRepository, { ITvshowRepository } from '../../infrastructure/tvshow-repository';
import { ITvshowDTO } from '../dto/tvshow-dto';

const batchFn = (ids: ReadonlyArray<number>, repository: ITvshowRepository) => {
  return Promise.all(ids.map((id) => repository.getById(id)));
};

export type TvDetailLoader = Dataloader<number, ITvshowDTO | null>;

export default function makeTvDetailDataLoader(): TvDetailLoader {
  return new Dataloader<number, ITvshowDTO | null>((ids: ReadonlyArray<number>) =>
    batchFn(ids, new TvshowRepository()),
  );
}
