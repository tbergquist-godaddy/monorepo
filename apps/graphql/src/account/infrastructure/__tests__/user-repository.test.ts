import * as crosscutting from 'crosscutting';

import { IUser } from '../entities/user-entity';
import UserRepository from '../user-repository';

const setup = () => {
  const user: IUser = {
    _id: '1' as any,
    id: '1',
    username: 'lol',
    password: '123',
    email: 'lol@lol.com',
  };
  const findOne = jest.fn();
  const find = jest.fn();
  const updateOne = jest.fn();
  const create = jest.fn();

  const model: any = {
    findOne,
    find,
    updateOne,
    create,
  };

  const repository = new UserRepository(model);

  return {
    repository,
    findOne,
    find,
    user,
    updateOne,
    create,
  };
};

describe('getByUsername', () => {
  it('gets a user by username', async () => {
    const { repository, findOne, user } = setup();

    findOne.mockResolvedValue({
      toObject: () => user,
    });

    await expect(repository.getByUserName('lol')).resolves.toEqual(user);
  });

  it('returns null if findOne throws', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementationOnce(() => {});
    const { repository, findOne } = setup();
    findOne.mockRejectedValue(new Error('Dang'));

    await expect(repository.getByUserName('lol')).resolves.toBeNull();
    expect(spy).toHaveBeenCalledWith('failed to fetch user: lol', new Error('Dang'));
    spy.mockRestore();
  });

  it('returns undefined if findOne returns null', async () => {
    const { repository, findOne } = setup();
    findOne.mockResolvedValue(null);
    await expect(repository.getByUserName('lol')).resolves.toBeUndefined();
  });
});

describe('getByUserNames', () => {
  it('returns users by usernames', async () => {
    const { find, repository, user } = setup();
    const users = [null, { toObject: () => user }, null];
    find.mockResolvedValue(users);

    await expect(repository.getByUserNames(['lars', 'lol', 'tore'])).resolves.toEqual([
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

    await expect(repository.getByUserNames(['lars', 'lol', 'tore'])).resolves.toBeNull();
    expect(spy).toHaveBeenCalledWith('failed to fetch users', ['lars', 'lol', 'tore'], error);
    spy.mockRestore();
  });
});

describe('saveUser', () => {
  it('returns true when the operation succeeds', async () => {
    const { repository, updateOne, user } = setup();
    updateOne.mockResolvedValue({ matchedCount: 1 });

    await expect(repository.saveUser(user)).resolves.toBe(true);
  });

  it('returns false when no records were updated', async () => {
    const { repository, updateOne, user } = setup();
    updateOne.mockResolvedValue({ matchedCount: 0 });

    await expect(repository.saveUser(user)).resolves.toBe(false);
  });

  it('returns false when update throws', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();
    const { repository, updateOne, user } = setup();
    const error = new Error('Failed');
    updateOne.mockRejectedValue(error);

    await expect(repository.saveUser(user)).resolves.toBe(false);
    expect(spy).toHaveBeenCalledWith('Failed to update user', user, error);
    spy.mockRestore();
  });
});

describe('createUser', () => {
  it('returns the new user', async () => {
    const { repository, create } = setup();
    const newUser = {
      username: 'username',
      password: 'hashed_password',
      email: 'lol@lol.com',
    };

    create.mockResolvedValue({
      toObject: () => ({ ...newUser, _id: '1' }),
    });

    await expect(repository.createUser(newUser)).resolves.toEqual({ ...newUser, _id: '1' });
  });

  it('throws the error if creation fails', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation();

    const {
      repository,
      create,
      user: { _id, ...newUser },
    } = setup();
    const error = new Error('Failed to create user');
    create.mockRejectedValue(error);

    await expect(repository.createUser(newUser)).rejects.toEqual(error);
    expect(spy).toHaveBeenCalledWith('Failed to create user', error);
    spy.mockRestore();
  });
});
