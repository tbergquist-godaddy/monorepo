import FavoriteRepository, { IFavoriteRepository } from '../infrastructure/favorite-repository';
import { IFavorite } from '../infrastructure/entities/favorite-entity';
import makeFavoritesLoader, { FavoritesDataLoader } from './dataloaders/favorites-loader';
import makeIsFavoritesLoader, { IsFavoritesDataLoader } from './dataloaders/is-favorite-loader';
import { IFavoriteDTO } from './dto/favorite-dto';

export interface IFavoriteService {
  getFavorites: (userId: string) => Promise<Array<IFavoriteDTO>>;
  isFavorite: (userId: string, serieId: number) => Promise<boolean>;
  addFavorite: (userId: string, serieId: number) => Promise<IFavoriteDTO | null>;
  deleteFavorite: (userId: string, serieId: number) => Promise<boolean>;
}

export default class FavoriteService implements IFavoriteService {
  #favoritesLoader: FavoritesDataLoader;
  #isFavoriteLoader: IsFavoritesDataLoader;
  #repository: IFavoriteRepository;

  constructor(
    loader: FavoritesDataLoader = makeFavoritesLoader(),
    isFavoritesLoader: IsFavoritesDataLoader = makeIsFavoritesLoader(),
    repository: IFavoriteRepository = new FavoriteRepository(),
  ) {
    this.#favoritesLoader = loader;
    this.#isFavoriteLoader = isFavoritesLoader;
    this.#repository = repository;
  }

  deleteFavorite(userId: string, serieId: number): Promise<boolean> {
    return this.#repository.deleteFavorite(userId, serieId);
  }

  async addFavorite(userId: string, serieId: number): Promise<IFavoriteDTO | null> {
    const favorite = await this.#repository.addFavorite(userId, serieId);

    return favorite == null ? null : this.mapToDTO(favorite);
  }

  isFavorite(userId: string, serieId: number): Promise<boolean> {
    return this.#isFavoriteLoader.load({ userId, serieId });
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
