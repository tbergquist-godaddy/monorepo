import createUserResolver from '../create-user-resolver';

const setup = () => {
  const args = {
    username: 'user',
    password: 'password',
    email: 'test@test.com',
  };
  const createUser = jest.fn();
  const userService = {
    createUser,
  };
  const context: any = {
    userService,
  };

  const resolve = () => createUserResolver({}, args, context);

  return {
    resolve,
    createUser,
  };
};

it('returns success true when create succeeds', async () => {
  const { resolve, createUser } = setup();
  createUser.mockResolvedValue({});
  await expect(resolve()).resolves.toEqual({ success: true });
});

it('returns success false when create user failed', async () => {
  const { resolve, createUser } = setup();
  createUser.mockResolvedValue(null);
  await expect(resolve()).resolves.toEqual({ success: false });
});
