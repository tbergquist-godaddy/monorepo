import Dataloader from 'dataloader';
import stringify from 'json-stable-stringify';

import FavoritesService from '../favorites-service';

const setup = () => {
  const favoritesFn = jest.fn();
  const isFavoriteFn = jest.fn();
  const favoritesLoader = new Dataloader<any, any, any>(favoritesFn);
  const isFavoritesLoader = new Dataloader<any, any, any>(isFavoriteFn, {
    cacheKeyFn: stringify,
  });

  const service = new FavoritesService(favoritesLoader, isFavoritesLoader);

  return {
    service,
    favoritesFn,
    isFavoriteFn,
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
