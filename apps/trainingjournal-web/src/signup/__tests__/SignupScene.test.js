// @flow

import React from 'react';
import { Environment } from '@tbergq/relay';
import { MockPayloadGenerator } from 'relay-test-utils';
import { render, act, fireEvent } from '@tbergq/test-utils';
import { useRouter } from 'next/router';

import SignupScene from '../SignupScene';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const getMock = (fn: Function) => {
  const mock: any = fn;
  return mock;
};

it('creates a new user', async () => {
  const environment: any = Environment.getEnvironment();
  const push = jest.fn();
  getMock(useRouter).mockImplementationOnce(() => {
    return {
      push,
    };
  });
  const { getByTestId } = render(<SignupScene />);

  const username = getByTestId('usernameInput');
  const email = getByTestId('emailInput');
  const password = getByTestId('passwordInput');
  const confirmPassword = getByTestId('confirmPasswordInput');
  const submit = getByTestId('submitButton');

  act(() => {
    fireEvent.change(username, { target: { value: 'uname', name: 'username' } });
    fireEvent.change(email, { target: { value: 'email', name: 'email' } });
    fireEvent.change(password, { target: { value: 'password', name: 'password' } });
    fireEvent.change(confirmPassword, {
      target: { value: 'password', name: 'confirmPassword' },
    });
  });

  expect(username.getAttribute('value')).toBe('uname');
  expect(email.getAttribute('value')).toBe('email');
  expect(password.getAttribute('value')).toBe('password');
  expect(confirmPassword.getAttribute('value')).toBe('password');

  await act(async () => {
    await fireEvent.click(submit);
  });

  act(() => {
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation),
    );
  });

  expect(push).toHaveBeenCalledWith('/login');
});
