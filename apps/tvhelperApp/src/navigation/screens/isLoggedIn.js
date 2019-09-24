// @flow strict

import { AsyncStorage } from 'react-native'; // TODO: Use package from community
import { TOKEN_KEY } from '@tbergq/utils';
import decode from 'jwt-decode';

export default async function isLoggedIn() {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  if (token == null) {
    return false;
  }
  const { exp } = decode(token);

  return exp * 1000 > new Date();
}
