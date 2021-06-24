import * as crosscutting from 'crosscutting';

import UserRepository from '../user-repository';

const setup = () => {
  const user = {
    _id: '1',
    username: 'lol',
    password: '123',
    email: 'lol@lol.com',
  };
  const findOne = jest.fn();
  const find = jest.fn();
  const model: any = {
    findOne,
    find,
  };
  const repository = new UserRepository(model);
  return {
    repository,
    findOne,
    find,
    user,
  };
};

describe('getByUsername', () => {
  it('gets a user by username', async () => {
    const { repository, findOne, user } = setup();

    findOne.mockResolvedValue({
      toObject: () => user,
    });

    expect(await repository.getByUserName('lol')).toEqual(user);
  });

  it('returns null if findOne throws', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementationOnce(() => {});
    const { repository, findOne } = setup();
    findOne.mockRejectedValue(new Error('Dang'));

    expect(await repository.getByUserName('lol')).toBeNull();
    expect(spy).toHaveBeenCalledWith('failed to fetch user: lol', new Error('Dang'));
    spy.mockRestore();
  });

  it('returns undefined if findOne returns null', async () => {
    const { repository, findOne } = setup();
    findOne.mockResolvedValue(null);
    expect(await repository.getByUserName('lol')).toBeUndefined();
  });
});

describe('getByUserNames', () => {
  it('returns users by usernames', async () => {
    const { find, repository, user } = setup();
    const users = [null, { toObject: () => user }, null];
    find.mockResolvedValue(users);

    expect(await repository.getByUserNames(['lars', 'lol', 'tore'])).toEqual([
      undefined,
      user,
      undefined,
    ]);
  });

  it('returns null if find throws', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementationOnce(() => {});
    const { find, repository } = setup();
    const error = new Error('dang');
    find.mockRejectedValue(error);

    expect(await repository.getByUserNames(['lars', 'lol', 'tore'])).toBeNull();
    expect(spy).toHaveBeenCalledWith('failed to fetch users', ['lars', 'lol', 'tore'], error);
    spy.mockRestore();
  });
});
