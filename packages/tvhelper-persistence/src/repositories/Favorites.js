// @flow

import FavoritesModel from '../models/Favorites';
import Favorite from '../dataObjects/Favorite';

export default class FavoritesRepository {
  async getFavorites(userIds: $ReadOnlyArray<string>): Promise<$ReadOnlyArray<Favorite>> {
    const favorites = await FavoritesModel.find({ userId: { $in: userIds } });

    return favorites.map(favorite => new Favorite(favorite));
  }

  static async createFavorite(userId: string, serieId: string): Promise<Favorite> {
    const favorite = await FavoritesModel.create({ userId, serieId });
    return new Favorite(favorite);
  }

  static async deleteFavorite(userId: string, serieId: string): Promise<boolean> {
    const response = await FavoritesModel.deleteOne({ userId, serieId });
    return response.ok && response.deletedCount > 0;
  }
}
