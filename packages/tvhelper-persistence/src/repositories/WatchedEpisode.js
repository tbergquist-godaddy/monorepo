// @flow

import WatchedEpisodeModel from '../models/WatchedEpisode';
import WatchedEpisode from '../dataObjects/WatchedEpisode';

export default class WatchedEpisodeRepository {
  static async markAsWatched(userId: string, episodeId: string) {
    const episode = await WatchedEpisodeModel.create({ userId, episodeId });
    return new WatchedEpisode(episode);
  }
}
