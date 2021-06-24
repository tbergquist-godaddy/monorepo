import * as jwt from 'jsonwebtoken';

import loginResolver from '../login-resolver';

jest.mock('jsonwebtoken');
jest.mock('dotenv');

const setup = () => {
  const username = 'lol';
  const password = 'rofl';
  const getByUserName = jest.fn();
  const verifyPassword = jest.fn();
  const log = jest.fn();
  const userService = {
    getByUserName,
    verifyPassword,
  };
  const context: any = { userService, log };

  const resolve = () => loginResolver({}, { username, password }, context);

  return {
    resolve,
    verifyPassword,
    log,
    getByUserName,
  };
};

it('resolves correctly when password is incorrect', async () => {
  const { resolve, verifyPassword } = setup();
  verifyPassword.mockResolvedValue(false);

  expect(await resolve()).toEqual({ success: false, token: null });
});

it('resolves correctly if verify throws', async () => {
  const { resolve, verifyPassword, log } = setup();
  const error = new Error('wrong password');
  verifyPassword.mockRejectedValue(error);

  expect(await resolve()).toEqual({ success: false, token: null });
  expect(log).toHaveBeenCalledWith('login failed', error);
});

it('returns a signedToken when password is correct', async () => {
  const { resolve, verifyPassword, getByUserName } = setup();
  const user = {};
  verifyPassword.mockResolvedValue(true);
  getByUserName.mockResolvedValue(user);
  const token = 'signedToken';
  const verify = jest.spyOn(jwt, 'sign').mockImplementation(() => token);

  expect(await resolve()).toEqual({
    success: true,
    token,
  });
  expect(verify).toHaveBeenCalledWith(user, process.env.JWT_SECRET, {
    expiresIn: '1y',
    issuer: 'tbergq-graphql.now.sh',
  });
  verify.mockRestore();
});
