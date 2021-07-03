import Dataloader from 'dataloader';

import TvshowRepository, { ITvshowRepository } from '../../infrastructure/tvshow-repository';
import { ITvshowDTO } from '../dto/tvshow-dto';

const batchFn = (
  queries: ReadonlyArray<string>,
  repository: ITvshowRepository,
): Promise<ITvshowDTO[][]> => {
  return Promise.all(queries.map((query) => repository.search(query)));
};

export type SearchTVShowDataloader = Dataloader<string, ITvshowDTO[]>;
const makeSearchTVShowDataloader = (): SearchTVShowDataloader => {
  return new Dataloader<string, ITvshowDTO[]>((queries: ReadonlyArray<string>) =>
    batchFn(queries, new TvshowRepository()),
  );
};

export default makeSearchTVShowDataloader;
