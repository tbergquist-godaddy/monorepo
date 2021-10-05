import { toGlobalId } from '@adeira/graphql-global-id';
import { ITvshowService } from 'tvshow';

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
  const getById = jest.fn();
  const tvshowService: ITvshowService = {
    getById,
    getByIds: jest.fn(),
    search: jest.fn(),
  };

  const context: any = {
    user,
    favoriteService,
    tvshowService,
  };

  const args = { serieId: toGlobalId('tvShow', 1) };
  const resolve = () => addFavoriteResolver({}, args, context);

  return {
    resolve,
    getById,
    addFavorite,
  };
};

it('returns false if you are not logged in', async () => {
  const { resolve } = setup();

  await expect(resolve()).resolves.toEqual({ success: false, tvShow: null });
});

it('returns success if all goes well', async () => {
  const { resolve, getById, addFavorite } = setup({ id: '123' });
  const tvShow = { name: 'lol' };
  addFavorite.mockResolvedValue({ id: '1', userId: '123', serieId: 123 });
  getById.mockResolvedValue(tvShow);

  await expect(resolve()).resolves.toEqual({ success: true, tvShow });
});

it('returns success even if fetching tv detail fails', async () => {
  const { resolve, getById, addFavorite } = setup({ id: '123' });
  addFavorite.mockResolvedValue({ id: '1', userId: '123', serieId: 123 });
  getById.mockRejectedValue(new Error('Failed to fetch'));

  await expect(resolve()).resolves.toEqual({ success: true, tvShow: null });
});

it('returns success false if adding favorite failed', async () => {
  const { resolve, getById, addFavorite } = setup({ id: '123' });
  const tvShow = { name: 'lol' };
  addFavorite.mockRejectedValue(new Error('Duplicate key'));
  getById.mockResolvedValue(tvShow);

  await expect(resolve()).resolves.toEqual({ success: false, tvShow: null });
});

it('returns success false if add favorite returns null', async () => {
  const { resolve, getById, addFavorite } = setup({ id: '123' });
  const tvShow = { name: 'lol' };
  addFavorite.mockResolvedValue(null);
  getById.mockResolvedValue(tvShow);

  await expect(resolve()).resolves.toEqual({ success: false, tvShow: null });
});
