// @flow strict-local

import { getToken } from './getToken';

export default function isLoggedIn(): boolean {
  try {
    const token = getToken();
    return token != null;
  } catch {
    return false;
  }
}
