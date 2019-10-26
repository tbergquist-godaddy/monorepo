// @flow

import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { MockPayloadGenerator } from 'relay-test-utils';
import { Environment } from '@tbergq/relay';
import Router from 'next/router';

import LoginForm from '../LoginForm';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

it('handles login', () => {
  const environment = Environment.getEnvironment();
  const { getByTestId, container } = render(<LoginForm />);

  const username = container.querySelector('input[name="username"]');
  const password = container.querySelector('input[name="password"]');
  const submit = getByTestId('LoginFormSubmit');

  act(() => {
    fireEvent.change(username, { target: { value: 'uname' } });
    fireEvent.change(password, { target: { value: 'pa$$word' } });
  });

  expect(username.value).toBe('uname');
  expect(password.value).toBe('pa$$word');
  act(() => {
    fireEvent.click(submit);

    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        LoginType: () => ({ success: true, token: 'tok' }),
      }),
    );
  });
  expect(Router.push).toHaveBeenCalledWith({ pathname: '/' });
});
