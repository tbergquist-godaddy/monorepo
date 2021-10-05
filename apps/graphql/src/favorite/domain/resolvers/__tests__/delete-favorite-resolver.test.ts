import { toGlobalId } from '@adeira/graphql-global-id';

import deleteFavoriteResolver from '../delete-favorite-resolver';
import { IFavoriteService } from '../../favorites-service';

type User = { id: string } | null | undefined;

const setup = (user: User = null) => {
  const serieId = toGlobalId('tvshow', 1);
  const args = { serieId };
  const deleteFavorite = jest.fn();

  const favoriteService: IFavoriteService = {
    addFavorite: jest.fn(),
    deleteFavorite,
    getFavorites: jest.fn(),
    isFavorite: jest.fn(),
  };
  const context: any = {
    user,
    favoriteService,
  };
  const resolve = () => deleteFavoriteResolver({}, args, context);

  return {
    resolve,
    deleteFavorite,
    serieId,
  };
};

it('returns null if user is null', async () => {
  const { resolve } = setup();
  await expect(resolve()).resolves.toEqual({ success: false, id: null });
});

it('returns success if adding succeeds', async () => {
  const { resolve, deleteFavorite, serieId } = setup({ id: '1' });
  deleteFavorite.mockResolvedValue(true);

  await expect(resolve()).resolves.toEqual({ success: true, id: serieId });
  expect(deleteFavorite).toHaveBeenCalledWith('1', 1);
});

it('returns success false if adding fails', async () => {
  const { resolve, deleteFavorite } = setup({ id: '1' });
  deleteFavorite.mockResolvedValue(false);

  await expect(resolve()).resolves.toEqual({ success: false, id: null });
  expect(deleteFavorite).toHaveBeenCalledWith('1', 1);
});

it('returns success false if adding throws', async () => {
  const { resolve, deleteFavorite } = setup({ id: '1' });
  deleteFavorite.mockRejectedValue(new Error('Oh no'));

  await expect(resolve()).resolves.toEqual({ success: false, id: null });
  expect(deleteFavorite).toHaveBeenCalledWith('1', 1);
});
