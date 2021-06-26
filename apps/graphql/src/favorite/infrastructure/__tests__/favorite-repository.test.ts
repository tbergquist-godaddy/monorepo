import * as crosscutting from 'crosscutting';

import FavoriteRepository from '../favorite-repository';

const setup = () => {
  const find = jest.fn();
  const exists = jest.fn();
  const create = jest.fn();
  const deleteOne = jest.fn();

  const model: any = {
    find,
    exists,
    create,
    deleteOne,
  };

  const favorite = {
    _id: '123',
    userId: '321',
    serieId: 987,
  };

  const repository = new FavoriteRepository(model);
  return {
    repository,
    find,
    exists,
    create,
    favorite,
    deleteOne,
  };
};

it('returns favorites', async () => {
  const { repository, find, favorite } = setup();
  const favorites = [favorite];
  find.mockResolvedValue([{ toObject: () => favorites[0] }]);

  expect(await repository.getFavorites(['123'])).toEqual(favorites);
});

describe('isFavorite', () => {
  it('returns true if the serie exits', async () => {
    const { repository, exists } = setup();
    exists.mockResolvedValue(true);
    expect(await repository.isFavorite('123', 123)).toBe(true);
  });

  it('returns false if the serie does not exit', async () => {
    const { repository, exists } = setup();
    exists.mockResolvedValue(false);
    expect(await repository.isFavorite('123', 123)).toBe(false);
  });
});

describe('addFavorite', () => {
  it('creates a favorite and returns it', async () => {
    const { create, repository, favorite } = setup();
    create.mockResolvedValue({ toObject: () => favorite });

    expect(await repository.addFavorite('123', 123)).toEqual(favorite);
    expect(create).toHaveBeenCalledWith({ userId: '123', serieId: 123 });
  });
});

describe('deleteFavorite', () => {
  it('returns false if deleteOne returns null', async () => {
    const { repository, deleteOne } = setup();
    deleteOne.mockResolvedValue(null);
    expect(await repository.deleteFavorite('123', 123)).toBe(false);
    expect(deleteOne).toHaveBeenCalledWith({ userId: '123', serieId: 123 });
  });

  it('returns false if deleteOne throws', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation(jest.fn());
    const { repository, deleteOne } = setup();
    const error = new Error('Could not delete');
    deleteOne.mockRejectedValue(error);
    expect(await repository.deleteFavorite('123', 123)).toBe(false);
    expect(spy).toHaveBeenCalledWith('Failed to delete favorite', error);
    spy.mockRestore();
  });

  it('returns true if deletedCount is greater than 0', async () => {
    const { repository, deleteOne } = setup();
    deleteOne.mockResolvedValue({ deletedCount: 1 });
    expect(await repository.deleteFavorite('123', 123)).toBe(true);
    expect(deleteOne).toHaveBeenCalledWith({ userId: '123', serieId: 123 });
  });
});
