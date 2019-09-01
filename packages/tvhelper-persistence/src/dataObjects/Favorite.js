// @flow

import type { Favorite as FavoriteModel } from '../models/Favorites';

export default class Favorite {
  id: string;
  userId: string;
  serieId: string;

  constructor(favorite: FavoriteModel) {
    this.id = favorite._id.toString();
    this.userId = (favorite.userId ?? '').toString();
    this.serieId = favorite.serieId;
  }
}
