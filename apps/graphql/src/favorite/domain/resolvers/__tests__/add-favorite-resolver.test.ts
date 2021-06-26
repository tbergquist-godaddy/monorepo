import { toGlobalId } from '@adeira/graphql-global-id';

import { IFavoriteService } from '../../favorites-service';
import addFavoriteResolver from '../add-favorite-resolver';

type User = { id: string } | null | undefined;
const setup = (user: User = null) => {
  const addFavorite = jest.fn();
  const favoriteService: IFavoriteService = {
    addFavorite,
    getFavorites: jest.fn(),
    isFavorite: jest.fn(),
    deleteFavorite: jest.fn(),
  };

  const fetchTvShow = jest.fn();

  const dataLoader: any = {
    tvhelper: {
      tvDetail: { load: fetchTvShow },
    },
  };

  const context: any = {
    user,
    favoriteService,
    dataLoader,
  };
  const args = { serieId: toGlobalId('tvShow', 1) };
  const resolve = () => addFavoriteResolver({}, args, context);

  return {
    resolve,
    fetchTvShow,
    addFavorite,
  };
};

it('returns false if you are not logged in', async () => {
  const { resolve } = setup();

  expect(await resolve()).toEqual({ success: false, tvShow: null });
});

it('returns success if all goes well', async () => {
  const { resolve, fetchTvShow, addFavorite } = setup({ id: '123' });
  const tvShow = { name: 'lol' };
  addFavorite.mockResolvedValue({ id: '1', userId: '123', serieId: 123 });
  fetchTvShow.mockResolvedValue(tvShow);

  expect(await resolve()).toEqual({ success: true, tvShow });
});

it('returns success even if fetching tv detail fails', async () => {
  const { resolve, fetchTvShow, addFavorite } = setup({ id: '123' });
  addFavorite.mockResolvedValue({ id: '1', userId: '123', serieId: 123 });
  fetchTvShow.mockRejectedValue(new Error('Failed to fetch'));

  expect(await resolve()).toEqual({ success: true, tvShow: null });
});

it('returns success false if adding favorite failed', async () => {
  const { resolve, fetchTvShow, addFavorite } = setup({ id: '123' });
  const tvShow = { name: 'lol' };
  addFavorite.mockRejectedValue(new Error('Duplicate key'));
  fetchTvShow.mockResolvedValue(tvShow);

  expect(await resolve()).toEqual({ success: false, tvShow: null });
});
