// @flow

import React from 'react';
import { Environment } from '@tbergq/relay';
import { MockPayloadGenerator } from 'relay-test-utils';
import { render, act, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

import SignupScene from '../SignupScene';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const getMock = (fn: Function) => {
  const mock: any = fn;
  return mock;
};

it('creates a new user', () => {
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

  fireEvent.change(username, { target: { value: 'uname' } });
  fireEvent.change(email, { target: { value: 'email' } });
  fireEvent.change(password, { target: { value: 'password' } });
  fireEvent.change(confirmPassword, { target: { value: 'password' } });

  expect(username.value).toBe('uname');
  expect(email.value).toBe('email');
  expect(password.value).toBe('password');
  expect(confirmPassword.value).toBe('password');

  act(() => {
    fireEvent.click(submit);
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation),
    );
  });

  expect(push).toHaveBeenCalledWith('/login');
});
