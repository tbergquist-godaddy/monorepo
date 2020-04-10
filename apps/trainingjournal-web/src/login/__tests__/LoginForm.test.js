// @flow

import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';
import Router from 'next/router';

import LoginForm from '../LoginForm';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

it('handles login', async () => {
  const environment = createMockEnvironment();

  const { getByTestId, container } = render(
    <RelayEnvironmentProvider environment={environment}>
      <LoginForm />
    </RelayEnvironmentProvider>,
  );

  const username = container.querySelector('input[name="username"]');
  const password = container.querySelector('input[name="password"]');
  const submit = getByTestId('LoginFormSubmit');

  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(username, { target: { value: 'uname' } });
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(password, { target: { value: 'pa$$word' } });
  });

  // $FlowFixMe: (add testing-library flow types)
  expect(username.value).toBe('uname');
  // $FlowFixMe: (add testing-library flow types)
  expect(password.value).toBe('pa$$word');

  await act(async () => {
    await fireEvent.click(submit);
  });

  act(() => {
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        LoginType: () => ({ success: true, token: 'tok' }),
      }),
    );
  });
  expect(Router.push).toHaveBeenCalledWith({ pathname: '/home' });
});
