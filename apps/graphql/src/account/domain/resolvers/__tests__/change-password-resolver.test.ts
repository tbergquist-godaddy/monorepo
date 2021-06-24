import changePasswordResolver from '../change-password-resolver';

const setup = (username: string | undefined | null = null) => {
  const password = '123';
  const newPassword = '321';
  const args = { password, newPassword };
  const user = { username };
  const changePassword = jest.fn();
  const userService = {
    changePassword,
  };
  const context: any = {
    user,
    userService,
  };

  const resolve = () => changePasswordResolver({}, args, context);

  return {
    resolve,
    changePassword,
  };
};

it('returns a password error when user is not logged in', async () => {
  const { resolve } = setup();

  expect(await resolve()).toEqual({
    isInvalidPassword: false,
    message: 'You must be logged in to change password',
  });
});

it('returns a password error when password is wrong', async () => {
  const { resolve, changePassword } = setup('rusle_biffen');
  changePassword.mockResolvedValue(false);

  expect(await resolve()).toEqual({
    isInvalidPassword: true,
    message: 'Wrong credentials',
  });
});

it('returns success true when all is good', async () => {
  const { resolve, changePassword } = setup('rusle_biffen');
  changePassword.mockResolvedValue(true);

  expect(await resolve()).toEqual({ success: true });
});
