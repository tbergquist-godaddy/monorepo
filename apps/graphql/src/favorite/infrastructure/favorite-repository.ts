import { Model } from 'mongoose';

import FavoriteModel, { IFavorite } from './entities/favorite-entity';

export interface IFavoriteRepository {
  getFavorites: (userIds: Array<string>) => Promise<Array<IFavorite>>;
  isFavorite: (userId: string, serieId: number) => Promise<boolean>;
}

export default class FavoriteRepository implements IFavoriteRepository {
  #model: Model<IFavorite>;

  constructor(model: Model<IFavorite> = FavoriteModel) {
    this.#model = model;
  }

  isFavorite(userId: string, serieId: number): Promise<boolean> {
    return this.#model.exists({ userId, serieId });
  }

  async getFavorites(userIds: string[]): Promise<IFavorite[]> {
    const favorites = await this.#model.find({ userId: { $in: userIds } });
    return favorites.map((favorite) => favorite.toObject());
  }
}
