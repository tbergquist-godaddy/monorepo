import FavoriteRepository from '../favorite-repository';

const setup = () => {
  const find = jest.fn();
  const exists = jest.fn();
  const create = jest.fn();

  const model: any = {
    find,
    exists,
    create,
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
