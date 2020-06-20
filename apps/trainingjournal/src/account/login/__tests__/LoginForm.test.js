// @flow

import * as React from 'react';
import {
  render,
  screen,
  fireEvent,
  createMockEnvironment,
  MockPayloadGenerator,
  waitFor,
  act,
} from '@tbergq/test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';
import * as router from 'next/router';
import cookies from 'js-cookie';
import { Toast } from '@tbergq/components';

import LoginForm from '../LoginForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <>
      <LoginForm />
      <Toast />
    </>
  </RelayEnvironmentProvider>
);

it('redirects to home on successful login', async () => {
  const push = jest.fn();
  const useRouterSpy = jest.spyOn(router, 'useRouter').mockImplementation(() => ({
    push,
  }));
  const cookieSpy = jest.spyOn(cookies, 'set');
  render(<TestRenderer />);

  const username = screen.getByLabelText(/username/i);
  const password = screen.getByLabelText(/password/i);

  fireEvent.change(username, { target: { value: 'user' } });
  fireEvent.change(password, { target: { value: 'pa$$word' } });
  await waitFor(() => expect(username).toHaveValue('user'));
  expect(password).toHaveValue('pa$$word');

  const submit = screen.getByRole('button', { name: /login/i });
  fireEvent.click(submit);
  await waitFor(() => expect(submit).toBeDisabled());
  act(() => {
    environment.mock.resolveMostRecentOperation((operation) => {
      const data = MockPayloadGenerator.generate(operation, {
        LoginType: () => ({
          token: 'token',
          success: true,
        }),
      });
      return data;
    });
  });
  expect(cookieSpy).toHaveBeenCalledWith('tokenKey', 'token');
  expect(push).toHaveBeenCalledWith('/home');
  cookieSpy.mockRestore();
  useRouterSpy.mockRestore();
});

it('shows a toast when login fails', async () => {
  const push = jest.fn();
  jest.spyOn(router, 'useRouter').mockImplementation(() => ({
    push,
  }));
  const cookieSpy = jest.spyOn(cookies, 'set');
  render(<TestRenderer />);

  const username = screen.getByLabelText(/username/i);
  const password = screen.getByLabelText(/password/i);

  fireEvent.change(username, { target: { value: 'user' } });
  fireEvent.change(password, { target: { value: 'pa$$word' } });
  await waitFor(() => expect(username).toHaveValue('user'));
  expect(password).toHaveValue('pa$$word');

  const submit = screen.getByRole('button', { name: /login/i });
  fireEvent.click(submit);
  await waitFor(() => expect(submit).toBeDisabled());
  act(() => {
    environment.mock.resolveMostRecentOperation((operation) => {
      const data = MockPayloadGenerator.generate(operation, {
        LoginType: () => ({
          token: null,
          success: false,
        }),
      });
      return data;
    });
  });
  expect(cookieSpy).not.toHaveBeenCalled();
  expect(push).not.toHaveBeenCalled();
  await waitFor(() => expect(screen.getByText('Login failed')).toBeInTheDocument());
});
