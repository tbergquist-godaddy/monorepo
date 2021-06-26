import { toGlobalId } from '@adeira/graphql-global-id';

import { IWatchedEpisodeService } from '../../watched-episode-service';
import markAsWatchedResolver from '../mark-as-watched-resolver';

type User = { id: string } | null | undefined;

const setup = (user: User = null) => {
  const episodeId = toGlobalId('episode', 6);
  const args = { episodeId };
  const addWatchedEpisode = jest.fn();
  const watchedEpisodeService: IWatchedEpisodeService = {
    addWatchedEpisode,
    deleteWatchedEpisode: jest.fn(),
    isEpisodeWatched: jest.fn(),
  };
  const context: any = {
    watchedEpisodeService,
    user,
  };
  const resolve = () => markAsWatchedResolver({}, args, context);

  return {
    resolve,
    addWatchedEpisode,
  };
};

it('returns failure if user is not logged in', async () => {
  const { resolve } = setup();
  expect(await resolve()).toEqual({ success: false, episode: null });
});

it('returns failure if service returns null', async () => {
  const { resolve, addWatchedEpisode } = setup({ id: '1' });
  addWatchedEpisode.mockResolvedValue(null);
  expect(await resolve()).toEqual({ success: false, episode: null });
  expect(addWatchedEpisode).toHaveBeenCalledWith(6);
});

it('returns success if service succeeds', async () => {
  const { resolve, addWatchedEpisode } = setup({ id: '1' });
  addWatchedEpisode.mockResolvedValue({});
  expect(await resolve()).toEqual({ success: true, episode: { id: '6', isWatched: true } });
  expect(addWatchedEpisode).toHaveBeenCalledWith(6);
});
