// @flow

import { verify } from 'password-hash';
import { sign } from 'jsonwebtoken';

import LoginResolver from '../LoginResolver';

jest.mock('password-hash', () => ({
  verify: jest.fn(),
}));
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

it('fails for user = null', () => {
  expect(LoginResolver(null, 'lol', 'tvhelper')).toEqual({
    token: null,
    success: false,
  });
});

it('fails for wrong password', () => {
  const user = {
    id: '123',
    password: 'knis',
    username: 'TitoBonito',
  };
  verify.mockReturnValueOnce(false);
  expect(LoginResolver(user, 'lol', 'tvhelper')).toEqual({
    token: null,
    success: false,
  });
});

it('works for correct password', () => {
  const user = {
    id: '123',
    password: 'lol',
    username: 'TitoBonito',
  };

  verify.mockReturnValueOnce(true);
  sign.mockReturnValueOnce('validToken');

  expect(LoginResolver(user, 'lol', 'tvhelper')).toEqual({
    token: 'validToken',
    success: true,
  });
});
