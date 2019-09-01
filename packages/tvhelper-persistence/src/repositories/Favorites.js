// @flow

import FavoritesModel from '../models/Favorites';
import Favorite from '../dataObjects/Favorite';

export default class FavoritesRepository {
  async getFavorites(userIds: $ReadOnlyArray<string>) {
    const favorites = await FavoritesModel.find({ userId: { $in: userIds } });

    return favorites.map(favorite => new Favorite(favorite));
  }

  static async createFavorite(userId: string, serieId: string) {
    const favorite = await FavoritesModel.create({ userId, serieId });
    return new Favorite(favorite);
  }
}
