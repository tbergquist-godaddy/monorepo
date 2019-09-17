// @flow

import { TOKEN_KEY } from '@tbergq/relay';
import cookie from 'js-cookie';

export default function isLoggedIn() {
  try {
    const token = cookie.get(TOKEN_KEY);

    return token != null;
  } catch {
    return false;
  }
}
