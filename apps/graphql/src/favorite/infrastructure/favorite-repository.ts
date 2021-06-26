import { log } from 'crosscutting';
import { Model } from 'mongoose';

import FavoriteModel, { IFavorite } from './entities/favorite-entity';

export interface IFavoriteRepository {
  getFavorites: (userIds: Array<string>) => Promise<Array<IFavorite>>;
  isFavorite: (userId: string, serieId: number) => Promise<boolean>;
  addFavorite: (userId: string, serieId: number) => Promise<IFavorite | null>;
}

export default class FavoriteRepository implements IFavoriteRepository {
  #model: Model<IFavorite>;

  constructor(model: Model<IFavorite> = FavoriteModel) {
    this.#model = model;
  }

  async addFavorite(userId: string, serieId: number): Promise<IFavorite | null> {
    try {
      const favorite = await this.#model.create({ userId, serieId });
      return favorite?.toObject();
    } catch (e) {
      log('Failed to add favorite', e);
      return null;
    }
  }

  isFavorite(userId: string, serieId: number): Promise<boolean> {
    return this.#model.exists({ userId, serieId });
  }

  async getFavorites(userIds: string[]): Promise<IFavorite[]> {
    const favorites = await this.#model.find({ userId: { $in: userIds } });
    return favorites.map((favorite) => favorite.toObject());
  }
}
