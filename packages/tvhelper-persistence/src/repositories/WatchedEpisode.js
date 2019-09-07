// @flow

import WatchedEpisodeModel from '../models/WatchedEpisode';
import WatchedEpisode from '../dataObjects/WatchedEpisode';

export default class WatchedEpisodeRepository {
  static async markAsWatched(userId: string, episodeId: number) {
    const episode = await WatchedEpisodeModel.create({ userId, episodeId });
    return new WatchedEpisode(episode);
  }

  static async findEpisodes(userId: ?string, episodeIds: $ReadOnlyArray<number>) {
    const episodes = await WatchedEpisodeModel.find({ userId, episodeId: { $in: episodeIds } });

    return episodes.map(episode => (episode == null ? null : new WatchedEpisode(episode)));
  }
}
