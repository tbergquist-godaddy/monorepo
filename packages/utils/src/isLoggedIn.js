// @flow

import { TOKEN_KEY } from '@tbergq/tvhelper-relay';
import decodeToken from 'jwt-decode';

export default function isLoggedIn(isJwt: boolean = true) {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token == null) {
      return false;
    } else if (token != null && isJwt === false) {
      return true;
    }
    const tokenInfo = decodeToken(token);
    const tokenExpiry = new Date(tokenInfo.exp * 1000);

    return tokenExpiry > Date.now();
  } catch {
    return false;
  }
}
