// @flow

import type { WatchedEpisodeType } from '../models/WatchedEpisode';

export default class WatchedEpisode {
  id: string;
  userId: string;
  episodeId: number;

  constructor(episode: WatchedEpisodeType) {
    this.id = episode._id.toString();
    this.userId = (episode.userId ?? '').toString();
    this.episodeId = episode.episodeId;
  }
}
