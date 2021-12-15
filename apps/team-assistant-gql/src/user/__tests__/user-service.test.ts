/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserService } from '../user-service';

const setup = () => {
  const create = jest.fn();
  const hashPassword = jest.fn().mockReturnValue({
    hash: 'hash',
    salt: 'salt',
  });
  const prismaClient = {
    user: {
      create,
    },
  } as any;
  const authService = {
    hashPassword,
  } as any;

  const userService = new UserService(prismaClient, authService);

  return {
    userService,
    create,
    hashPassword,
  };
};

it('hashes the password before saving the user', () => {
  const { userService, create, hashPassword } = setup();
  const email = 'test@test.no';
  const password = 'password';

  userService.createUser(email, password);

  expect(hashPassword).toHaveBeenCalledWith(password);
  expect(create).toHaveBeenCalledWith({
    data: {
      email,
      salt: 'salt',
      password: 'hash',
    },
  });
});
