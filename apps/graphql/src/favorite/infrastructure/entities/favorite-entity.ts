import { Schema } from 'mongoose';

import { tvHelperConnection } from '../../../connection';

export interface IFavorite {
  _id: string;
  userId: string;
  serieId: number;
}

const favoritesSchema = new Schema<IFavorite>({
  // @ts-ignore: Fix later, this works
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  serieId: {
    type: Number,
  },
});

favoritesSchema.index({ userId: 1, serieId: -1 }, { unique: true });
favoritesSchema.set('toObject', { getters: true });
favoritesSchema.path('userId').get(function (value: Schema.Types.ObjectId) {
  return value.toString();
});

const FavoriteModel = tvHelperConnection.model<IFavorite>('favorites', favoritesSchema);

export default FavoriteModel;
