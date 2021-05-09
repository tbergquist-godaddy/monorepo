// @flow

import { Schema } from 'mongoose';

import connection from '../connection';

export type Favorite = {
  +_id: string,
  +userId: ?string,
  +serieId: string,
};

const FavoritesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  serieId: {
    type: Number,
  },
});

FavoritesSchema.index({ userId: 1, serieId: -1 }, { unique: true });

const Favorites: $FlowFixMe = connection.model('favorites', FavoritesSchema);

export default Favorites;
