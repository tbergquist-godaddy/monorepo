import { log } from 'crosscutting';
import { Model } from 'mongoose';

import WatchedEpisode, { IWatchedEpisode } from './entities/watched-episode';

type MaybeEpisode = IWatchedEpisode | null | undefined;

export interface IWatchedEpisodeRepository {
  addWatchedEpisode: (userId: string, episodeId: number) => Promise<MaybeEpisode>;
}

export default class WatchedEpisodeRepository implements IWatchedEpisodeRepository {
  #model: Model<IWatchedEpisode>;

  constructor(model: Model<IWatchedEpisode> = WatchedEpisode) {
    this.#model = model;
  }

  async addWatchedEpisode(userId: string, episodeId: number): Promise<MaybeEpisode> {
    try {
      const episode = await this.#model.create({ userId, episodeId });
      return episode?.toObject();
    } catch (e) {
      log('Failed to add episode', e);
      return null;
    }
  }
}
