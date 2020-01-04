// @flow strict

import { getToken } from './getToken';

export default function isLoggedIn() {
  try {
    const token = getToken();
    return token != null;
  } catch {
    return false;
  }
}
