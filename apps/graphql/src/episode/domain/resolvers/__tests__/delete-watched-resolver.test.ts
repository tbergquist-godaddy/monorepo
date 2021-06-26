import { toGlobalId } from '@adeira/graphql-global-id';

import { IWatchedEpisodeService } from '../../watched-episode-service';
import deleteWatchedResolver from '../delete-watched-resolver';

type User = { id: string } | null | undefined;

const setup = (user: User = null) => {
  const episodeId = toGlobalId('episode', 6);
  const args = { episodeId };
  const deleteWatchedEpisode = jest.fn();
  const watchedEpisodeService: IWatchedEpisodeService = {
    deleteWatchedEpisode,
    addWatchedEpisode: jest.fn(),
    isEpisodeWatched: jest.fn(),
  };
  const context: any = {
    watchedEpisodeService,
    user,
  };
  const resolve = () => deleteWatchedResolver({}, args, context);

  return {
    resolve,
    deleteWatchedEpisode,
  };
};

it('returns failure if user is not logged in', async () => {
  const { resolve } = setup();

  expect(await resolve()).toEqual({ success: false, episode: null });
});

it('returns failure if service fails to add', async () => {
  const { resolve, deleteWatchedEpisode } = setup({ id: '1' });
  deleteWatchedEpisode.mockResolvedValue(false);

  expect(await resolve()).toEqual({ success: false, episode: null });
  expect(deleteWatchedEpisode).toHaveBeenCalledWith(6);
});

it('returns success if all goes well', async () => {
  const { resolve, deleteWatchedEpisode } = setup({ id: '1' });
  deleteWatchedEpisode.mockResolvedValue(true);

  expect(await resolve()).toEqual({ success: true, episode: { id: '6', isWatched: false } });
  expect(deleteWatchedEpisode).toHaveBeenCalledWith(6);
});
