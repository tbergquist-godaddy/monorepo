// @flow

import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

export const TOKEN_KEY = 'tokenKey';

export function getToken() {
  return cookie.get(TOKEN_KEY);
}

export function getNextToken(ctx: { ... }) {
  const tokens = nextCookie(ctx) ?? {};
  return tokens[TOKEN_KEY];
}
