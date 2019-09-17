// @flow

import cookie from 'js-cookie';

export const TOKEN_KEY = 'tokenKey';

export default function getToken() {
  return cookie.get(TOKEN_KEY);
}
