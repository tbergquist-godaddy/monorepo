// @flow

import { Schema } from 'mongoose';

import connection from '../connection';

export type WatchedEpisodeType = {
  +_id: string,
  +userId: ?string,
  +episodeId: number,
};

const WatchedEpisodesSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  episodeId: {
    type: Number,
    required: true,
  },
});

WatchedEpisodesSchema.index({ userId: 1, episodeId: -1 }, { unique: true });

const WatchedEpisode: $FlowFixMe = connection.model('watchedEpisodes', WatchedEpisodesSchema);

export default WatchedEpisode;
