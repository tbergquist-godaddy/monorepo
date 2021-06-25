import FavoriteRepository from '../favorite-repository';

const setup = () => {
  const find = jest.fn();
  const exists = jest.fn();

  const model: any = {
    find,
    exists,
  };

  const repository = new FavoriteRepository(model);
  return {
    repository,
    find,
    exists,
  };
};

it('returns favorites', async () => {
  const { repository, find } = setup();
  const favorites = [
    {
      _id: '123',
      userId: '321',
      serieId: 987,
    },
  ];
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
