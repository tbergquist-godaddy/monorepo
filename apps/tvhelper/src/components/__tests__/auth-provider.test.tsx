import { renderHook } from '@testing-library/react-hooks';
import * as jwtDecode from 'jwt-decode';

import { AuthProvider, useAuth } from '../auth-provider';

jest.mock('jwt-decode');

it('sets the state correctly when no user is logged in', () => {
  const { result } = renderHook(() => useAuth(), {
    wrapper: AuthProvider,
    initialProps: { token: null, children: null },
  });
  expect(result.current).toEqual({
    isLoggedIn: false,
    token: null,
    username: null,
  });
});

it('sets the state correctly when a user is logged in', () => {
  const username = 'my_user';
  const token = 'mock_token';
  const spy = jest.spyOn(jwtDecode, 'default').mockImplementation(() => ({ username }));

  const { result } = renderHook(() => useAuth(), {
    wrapper: AuthProvider,
    initialProps: { token, children: null },
  });

  expect(result.current).toEqual({
    isLoggedIn: true,
    token,
    username,
  });

  spy.mockRestore();
});
