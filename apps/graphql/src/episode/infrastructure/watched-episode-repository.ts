import { log } from 'crosscutting';
import { Model } from 'mongoose';

import WatchedEpisode, { IWatchedEpisode } from './entities/watched-episode';

type MaybeEpisode = IWatchedEpisode | null | undefined;

export interface IWatchedEpisodeRepository {
  addWatchedEpisode: (userId: string, episodeId: number) => Promise<MaybeEpisode>;
  deleteWatchedEpisode: (userId: string, episodeId: number) => Promise<boolean>;
  isWatched: (userId: string, episodeId: number[]) => Promise<MaybeEpisode[]>;
}

export default class WatchedEpisodeRepository implements IWatchedEpisodeRepository {
  #model: Model<IWatchedEpisode>;

  constructor(model: Model<IWatchedEpisode> = WatchedEpisode) {
    this.#model = model;
  }

  async isWatched(userId: string, episodeIds: number[]): Promise<MaybeEpisode[]> {
    const episodes = await this.#model.find({ userId, episodeId: { $in: episodeIds } });

    return episodes?.map((episode) => episode?.toObject());
  }

  async deleteWatchedEpisode(userId: string, episodeId: number): Promise<boolean> {
    try {
      const result = await this.#model.deleteOne({ userId, episodeId });
      const deletedCount = result?.deletedCount ?? 0;
      return deletedCount > 0;
    } catch (e) {
      log('Failed to delete episode', e);
      return false;
    }
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
