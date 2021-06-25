import Dataloader from 'dataloader';
import stringify from 'json-stable-stringify';

import FavoriteRepository, { IFavoriteRepository } from '../../infrastructure/favorite-repository';

export interface IsFavoriteArgs {
  userId: string;
  serieId: number;
}
const isFavorite = (
  args: ReadonlyArray<IsFavoriteArgs>,
  repository: IFavoriteRepository,
): Promise<Array<boolean>> => {
  const promises = args.map(({ userId, serieId }) => repository.isFavorite(userId, serieId));
  return Promise.all(promises);
};

export type IsFavoritesDataLoader = Dataloader<IsFavoriteArgs, boolean, string>;

const makeIsFavoritesLoader = (repository = new FavoriteRepository()): IsFavoritesDataLoader => {
  return new Dataloader<IsFavoriteArgs, boolean, string>((args) => isFavorite(args, repository), {
    cacheKeyFn: stringify,
  });
};

export default makeIsFavoritesLoader;
