import { Schema, ObjectId } from 'mongoose';

import { tvHelperConnection } from '../../../connection';

export interface IWatchedEpisode {
  _id: ObjectId;
  id: string;
  userId: string;
  episodeId: number;
}

const WatchedEpisodesSchema = new Schema<IWatchedEpisode>({
  userId: {
    // @ts-ignore: Fix later, this works
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  episodeId: {
    type: Number,
    required: true,
  },
});

WatchedEpisodesSchema.virtual('id').get(function (this: IWatchedEpisode): string {
  return this._id.toString();
});

WatchedEpisodesSchema.path('userId').get(function (value: Schema.Types.ObjectId) {
  return value.toString();
});

WatchedEpisodesSchema.set('toObject', { virtuals: true, getters: true });
WatchedEpisodesSchema.index({ userId: 1, episodeId: -1 }, { unique: true });

const WatchedEpisode = tvHelperConnection.model<IWatchedEpisode>(
  'watchedEpisodes',
  WatchedEpisodesSchema,
);

export default WatchedEpisode;
