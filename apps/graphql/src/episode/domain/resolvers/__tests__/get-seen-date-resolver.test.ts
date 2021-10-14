import { toGlobalId } from '@adeira/graphql-global-id';

import { IWatchedEpisodeService } from '../../watched-episode-service';
import getSeenDateResolver from '../get-seen-date-resolver';

type User = { id: string } | null | undefined;

const setup = (user: User = null) => {
  const episodeId = toGlobalId('episode', 6);
  const args = { episodeId };
  const getWatchedEpisode = jest.fn();
  const watchedEpisodeService: IWatchedEpisodeService = {
    addWatchedEpisode: jest.fn(),
    deleteWatchedEpisode: jest.fn(),
    isEpisodeWatched: jest.fn(),
    getWatchedEpisode,
  };
  const context: any = {
    watchedEpisodeService,
    user,
  };
  const resolve = () => getSeenDateResolver({} as any, args, context);

  return {
    resolve,
    getWatchedEpisode,
  };
};

it('returns null if user is not logged in', async () => {
  const { resolve } = setup();
  await expect(resolve()).resolves.toBeNull();
});

it('returns null if no date exists', async () => {
  const user = { id: '123' };
  const { resolve, getWatchedEpisode } = setup(user);

  getWatchedEpisode.mockResolvedValue({
    id: '123',
    userId: '123',
    date: null,
  });

  await expect(resolve()).resolves.toBeNull();
});

it('returns the date when it exists', async () => {
  const user = { id: '123' };
  const { resolve, getWatchedEpisode } = setup(user);
  const date = new Date(2000, 0, 1, 0, 0, 0, 0);
  getWatchedEpisode.mockResolvedValue({
    id: '123',
    userId: '123',
    date,
  });

  await expect(resolve()).resolves.toEqual(date);
});
