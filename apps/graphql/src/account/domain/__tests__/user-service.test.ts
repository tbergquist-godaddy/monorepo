import hash from 'password-hash';
import * as crosscutting from 'crosscutting';

import UserService from '../user-service';

const setup = () => {
  const user = {
    _id: '1',
    id: '1',
    username: 'lol',
    email: 'lol@lol.com',
    password: '123',
  };
  const getByUserName = jest.fn();
  const getByUserNames = jest.fn();
  const saveUser = jest.fn();
  const createUser = jest.fn();

  const userLoader: any = {
    load: getByUserName,
    loadMany: getByUserNames,
  };
  const repository: any = {
    saveUser,
    createUser,
  };

  const service = new UserService(userLoader, repository);

  return {
    service,
    getByUserName,
    getByUserNames,
    user,
    saveUser,
    createUser,
  };
};

describe('getByUserName', () => {
  it('gets a user by username', async () => {
    const { service, getByUserName, user } = setup();

    getByUserName.mockResolvedValue(user);

    await expect(service.getByUserName('lol')).resolves.toEqual({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  });
});

describe('getByUserNames', () => {
  it('returns users', async () => {
    const { getByUserNames, service } = setup();
    const users = [
      { _id: '1', id: '1', username: 'user_1', password: 'pw1', email: 'u@1.com' },
      { _id: '2', id: '2', username: 'user_2', password: 'pw2', email: 'u@2.com' },
      null,
    ];
    getByUserNames.mockResolvedValue(users);

    await expect(service.getByUserNames(['user_1', 'user_2', 'user_3'])).resolves.toEqual([
      {
        email: 'u@1.com',
        id: '1',
        username: 'user_1',
      },
      {
        email: 'u@2.com',
        id: '2',
        username: 'user_2',
      },
      null,
    ]);
  });
});

describe('verify password', () => {
  it('returns true when password is correct', async () => {
    const { getByUserName, service, user } = setup();
    const password = '123456';
    user.password = hash.generate(password);
    getByUserName.mockResolvedValue(user);

    await expect(service.verifyPassword(user.username, password)).resolves.toBe(true);
  });

  it('returns false when password is incorrect', async () => {
    const { getByUserName, service, user } = setup();
    const password = '123456';
    user.password = hash.generate(password);
    getByUserName.mockResolvedValue(user);

    await expect(service.verifyPassword(user.username, 'password')).resolves.toBe(false);
  });
});

describe('change password', () => {
  it('returns false if password is wrong', async () => {
    const spy = jest.spyOn(hash, 'verify').mockImplementation().mockReturnValue(false);
    const { service, getByUserName, user } = setup();
    getByUserName.mockResolvedValue(user);

    await expect(service.changePassword(user.username, '213', '123')).resolves.toBe(false);

    spy.mockRestore();
  });

  it('returns false if user is not found', async () => {
    const spy = jest.spyOn(crosscutting, 'log').mockImplementation(jest.fn());
    const { service, getByUserName } = setup();
    const error = new Error('not found');
    getByUserName.mockRejectedValue(error);

    await expect(service.changePassword('user', '213', '123')).resolves.toBe(false);
    expect(spy).toHaveBeenCalledWith('Failed to change password', error);
    spy.mockRestore();
  });

  it('returns true if the password is changed successfully', async () => {
    const spy = jest.spyOn(hash, 'verify').mockImplementation().mockReturnValue(true);
    const spy2 = jest
      .spyOn(hash, 'generate')
      .mockImplementation()
      .mockReturnValue('hashed_password');
    const { service, getByUserName, user, saveUser } = setup();
    getByUserName.mockResolvedValue(user);
    saveUser.mockResolvedValue(true);

    await expect(service.changePassword(user.username, '213', '123')).resolves.toBe(true);
    expect(saveUser).toHaveBeenCalledWith({
      ...user,
      password: 'hashed_password',
    });
    spy.mockRestore();
    spy2.mockRestore();
  });
});

describe('createUser', () => {
  it('creates a new user', async () => {
    const { service, createUser, user } = setup();
    const { _id, ...newUser } = user;
    createUser.mockResolvedValue(user);

    await expect(service.createUser(newUser)).resolves.toEqual({
      id: '1',
      email: user.email,
      username: user.username,
    });
    expect(createUser).toHaveBeenCalledWith(
      expect.objectContaining({
        email: newUser.email,
        username: newUser.username,
      }),
    );
    expect(createUser).not.toHaveBeenCalledWith(
      expect.objectContaining({ password: newUser.password }),
    );
  });
});
