import Dataloader from 'dataloader';
import stringify from 'json-stable-stringify';

import FavoritesService from '../favorites-service';
import { IFavoriteRepository } from '../../infrastructure/favorite-repository';

const setup = () => {
  const favoritesFn = jest.fn();
  const isFavoriteFn = jest.fn();
  const favoritesLoader = new Dataloader<any, any, any>(favoritesFn);
  const isFavoritesLoader = new Dataloader<any, any, any>(isFavoriteFn, {
    cacheKeyFn: stringify,
  });

  const addFavorite = jest.fn();
  const repository: IFavoriteRepository = {
    addFavorite,
    getFavorites: jest.fn(),
    isFavorite: jest.fn(),
    deleteFavorite: jest.fn(),
  };

  const service = new FavoritesService(favoritesLoader, isFavoritesLoader, repository);

  return {
    service,
    favoritesFn,
    isFavoriteFn,
    addFavorite,
  };
};

describe('getFavorites', () => {
  it('returns favorites', async () => {
    const { favoritesFn, service } = setup();
    const favorites = [[{ _id: '123', userId: '123', serieId: 123 }]];
    favoritesFn.mockResolvedValue(favorites);

    expect(await service.getFavorites('123')).toEqual([{ id: '123', userId: '123', serieId: 123 }]);
  });
});

describe('isFavorite', () => {
  it('returns true if it is a favorite', async () => {
    const { isFavoriteFn, service } = setup();
    isFavoriteFn.mockResolvedValue([true]);

    expect(await service.isFavorite('123', 123)).toBe(true);
  });

  it('returns false if it is not a favorite', async () => {
    const { isFavoriteFn, service } = setup();
    isFavoriteFn.mockResolvedValue([false]);

    expect(await service.isFavorite('123', 123)).toBe(false);
  });
});

describe('addFavorite', () => {
  it('returns a favorite', async () => {
    const { service, addFavorite } = setup();
    const favorite = {
      _id: '123',
      userId: '321',
      serieId: 6,
    };
    addFavorite.mockResolvedValue(favorite);

    expect(await service.addFavorite(favorite.userId, favorite.serieId)).toEqual({
      id: favorite._id,
      userId: favorite.userId,
      serieId: favorite.serieId,
    });
    expect(addFavorite).toHaveBeenCalledWith(favorite.userId, favorite.serieId);
  });
});
