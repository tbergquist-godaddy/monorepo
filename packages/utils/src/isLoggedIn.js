// @flow

import { TOKEN_KEY } from '@tbergq/tvhelper-relay';
import decodeToken from 'jwt-decode';

export default function isLoggedIn() {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token == null) {
      return false;
    }
    const tokenInfo = decodeToken(token);
    const tokenExpiry = new Date(tokenInfo.exp * 1000);

    return tokenExpiry > Date.now();
  } catch {
    return false;
  }
}
