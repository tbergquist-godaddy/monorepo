import { toGlobalId } from '@adeira/graphql-global-id';

import { IWatchedEpisodeService } from '../../watched-episode-service';
import markAsWatchedResolver from '../mark-as-watched-resolver';
import { IEpisodeService } from '../../episode-service';

type User = { id: string } | null | undefined;

const setup = (user: User = null) => {
  const episodeId = toGlobalId('episode', 6);
  const args = { episodeId };
  const addWatchedEpisode = jest.fn();
  const watchedEpisodeService: IWatchedEpisodeService = {
    addWatchedEpisode,
    deleteWatchedEpisode: jest.fn(),
    isEpisodeWatched: jest.fn(),
    getWatchedEpisode: jest.fn(),
  };
  const getEpisode = jest.fn();
  const episodeService: IEpisodeService = {
    getByTvshowId: jest.fn(),
    getEpisode,
    getNotSeenEpisodes: jest.fn(),
  };
  const context: any = {
    watchedEpisodeService,
    episodeService,
    user,
  };
  const resolve = () => markAsWatchedResolver({}, args, context);

  return {
    resolve,
    addWatchedEpisode,
    getEpisode,
  };
};

it('returns failure if user is not logged in', async () => {
  const { resolve } = setup();
  await expect(resolve()).resolves.toEqual({ success: false, episode: null });
});

it('returns failure if service returns null', async () => {
  const { resolve, addWatchedEpisode } = setup({ id: '1' });
  addWatchedEpisode.mockResolvedValue(null);
  await expect(resolve()).resolves.toEqual({ success: false, episode: null });
  expect(addWatchedEpisode).toHaveBeenCalledWith(6);
});

it('returns success if service succeeds', async () => {
  const { resolve, addWatchedEpisode, getEpisode } = setup({ id: '1' });
  addWatchedEpisode.mockResolvedValue({});
  getEpisode.mockResolvedValue({ isWatched: true, id: '6' });
  await expect(resolve()).resolves.toEqual({
    success: true,
    episode: { id: '6', isWatched: true },
  });
  expect(addWatchedEpisode).toHaveBeenCalledWith(6);
});
