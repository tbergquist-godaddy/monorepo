import { generate } from 'password-hash';

import UserService from '../user-service';

const setup = () => {
  const user = {
    _id: '1',
    username: 'lol',
    email: 'lol@lol.com',
    password: '123',
  };
  const getByUserName = jest.fn();
  const getByUserNames = jest.fn();

  const userLoader: any = {
    load: getByUserName,
    loadMany: getByUserNames,
  };
  const service = new UserService(userLoader);

  return {
    service,
    getByUserName,
    getByUserNames,
    user,
  };
};

describe('getByUserName', () => {
  it('gets a user by username', async () => {
    const { service, getByUserName, user } = setup();

    getByUserName.mockResolvedValue(user);

    expect(await service.getByUserName('lol')).toEqual({
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
      { _id: '1', username: 'user_1', password: 'pw1', email: 'u@1.com' },
      { _id: '2', username: 'user_2', password: 'pw2', email: 'u@2.com' },
      null,
    ];
    getByUserNames.mockResolvedValue(users);

    expect(await service.getByUserNames(['user_1', 'user_2', 'user_3'])).toEqual([
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
    user.password = generate(password);
    getByUserName.mockResolvedValue(user);

    expect(await service.verifyPassword(user.username, password)).toBe(true);
  });

  it('returns false when password is incorrect', async () => {
    const { getByUserName, service, user } = setup();
    const password = '123456';
    user.password = generate(password);
    getByUserName.mockResolvedValue(user);

    expect(await service.verifyPassword(user.username, 'password')).toBe(false);
  });
});
