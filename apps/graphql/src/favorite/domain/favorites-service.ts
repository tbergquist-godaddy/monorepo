import { IFavorite } from '../infrastructure/entities/favorite-entity';
import makeFavoritesLoader, { FavoritesDataLoader } from './dataloaders/favorites-loader';
import { IFavoriteDTO } from './dto/favorite-dto';

export interface IFavoriteService {
  getFavorites: (userId: string) => Promise<Array<IFavoriteDTO>>;
}

export default class FavoriteService implements IFavoriteService {
  #favoritesLoader: FavoritesDataLoader;

  constructor(loader: FavoritesDataLoader = makeFavoritesLoader()) {
    this.#favoritesLoader = loader;
  }

  mapToDTO({ _id, ...entity }: IFavorite): IFavoriteDTO {
    return {
      ...entity,
      id: _id,
    };
  }

  async getFavorites(userId: string): Promise<Array<IFavoriteDTO>> {
    const favorites = await this.#favoritesLoader.load(userId);
    return favorites.map(this.mapToDTO);
  }
}
