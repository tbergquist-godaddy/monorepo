import Dataloader from 'dataloader';

import { IFavorite } from '../../infrastructure/entities/favorite-entity';
import FavoriteRepository, { IFavoriteRepository } from '../../infrastructure/favorite-repository';

const fetchFavorites = async (
  userIds: ReadonlyArray<string>,
  repository: IFavoriteRepository,
): Promise<Array<Array<IFavorite>>> => {
  const responses = await repository.getFavorites([...userIds]);
  return userIds.map((userId) => responses.filter((response) => response.userId === userId));
};

export type FavoritesDataLoader = Dataloader<string, IFavorite[], string>;

const makeIsFavoritesLoader = (repository = new FavoriteRepository()): FavoritesDataLoader => {
  return new Dataloader<string, IFavorite[]>((userIds: ReadonlyArray<string>) =>
    fetchFavorites(userIds, repository),
  );
};

export default makeIsFavoritesLoader;
