/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as crypto from 'crypto';

import { UserService } from '../user-service';

const setup = () => {
  const create = jest.fn();
  const findFirst = jest.fn();
  const prismaClient = {
    user: {
      create,
      findFirst,
    },
  } as any;

  const userService = new UserService(prismaClient);

  return {
    userService,
    create,
    findFirst,
  };
};

it('hashes the password before saving the user', () => {
  const { userService, create } = setup();
  const email = 'test@test.no';
  const password = 'password';

  userService.createUser(email, password);

  expect(create).toHaveBeenCalledWith({
    data: {
      email,
      salt: expect.any(String),
      password: expect.any(String),
    },
  });
  expect(create.mock.calls[0][0].data.password).not.toEqual(password);
});

describe('validateUser', () => {
  it('returns null when no user is found', async () => {
    const { userService, findFirst } = setup();
    findFirst.mockResolvedValue(null);

    const user = await userService.validatePassword({
      email: 'test@test.no',
      password: 'password',
    });
    expect(user).toBeNull();
  });

  it('returns null if the password is invalid', async () => {
    const { userService, findFirst } = setup();
    const email = 'test@test.no';
    findFirst.mockResolvedValue({
      id: '1',
      email,
      salt: '',
      password: 'lol',
    });

    const user = await userService.validatePassword({
      email,
      password: 'omg',
    });
    expect(user).toBeNull();
  });

  it('returns the user', async () => {
    const { userService, findFirst } = setup();
    const user = {
      id: '1',
      email: 'test@test.no',
      salt: 'salt',
      password: 'password',
    };
    // @ts-ignore: Ok for testing
    jest.spyOn(crypto, 'pbkdf2Sync').mockReturnValue({ toString: () => user.password });

    findFirst.mockResolvedValue(user);

    await expect(
      userService.validatePassword({ email: user.email, password: user.password }),
    ).resolves.toEqual(user);
  });
});
