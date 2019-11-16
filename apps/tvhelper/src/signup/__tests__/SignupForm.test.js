// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Environment } from '@tbergq/relay';
import { MockPayloadGenerator } from 'relay-test-utils';
import Router from 'next/router';

import SignupForm from '../SignupForm';
import * as mutation from '../mutation/createUserMutation';

describe('SignupForm', () => {
  it('handles username change', () => {
    const { getByTestId } = render(<SignupForm />);

    const input = getByTestId('usernameInput');
    fireEvent.change(input, { target: { value: 'don_tito' } });

    expect(input.value).toBe('don_tito');
  });

  it('handles emailInput change', () => {
    const { getByTestId } = render(<SignupForm />);
    const email = 'tito@bonito.com';
    const input = getByTestId('emailInput');
    fireEvent.change(input, { target: { value: email } });

    expect(input.value).toBe(email);
  });

  it('handles password change', () => {
    const { getByTestId } = render(<SignupForm />);
    const password = '123456'; // 😍
    const input = getByTestId('passwordInput');
    fireEvent.change(input, { target: { value: password } });

    expect(input.value).toBe(password);
  });

  it('handles confirmPassword change', () => {
    const { getByTestId } = render(<SignupForm />);
    const password = '123456'; // 😍
    const input = getByTestId('confirmPasswordInput');
    fireEvent.change(input, { target: { value: password } });

    expect(input.value).toBe(password);
  });

  it('show a toast when password and confirmPassword does not match', () => {
    const { getByTestId, getByText } = render(<SignupForm />);
    const password = getByTestId('passwordInput');
    const confirmPassword = getByTestId('confirmPasswordInput');
    const submit = getByTestId('submitButton');
    const preventDefault = jest.fn();
    const spy = jest.spyOn(mutation, 'default');

    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.change(confirmPassword, { target: { value: '12345' } });
    fireEvent.click(submit, { preventDefault });

    expect(getByText('password and confirm password does not match')).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

  it('show a toast when it fails to create a user', () => {
    const { getByTestId, getByText } = render(<SignupForm />);
    const username = getByTestId('usernameInput');
    const email = getByTestId('emailInput');
    const password = getByTestId('passwordInput');
    const confirmPassword = getByTestId('confirmPasswordInput');
    const submit = getByTestId('submitButton');
    const preventDefault = jest.fn();
    const spy = jest.spyOn(mutation, 'default');
    const environment = Environment.getEnvironment();

    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.change(confirmPassword, { target: { value: '123456' } });
    fireEvent.change(username, { target: { value: 'tito' } });
    fireEvent.change(email, { target: { value: 'tito@bonito.com' } });

    act(() => {
      fireEvent.click(submit, { preventDefault });
      const operation = environment.mock.getMostRecentOperation();
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          CreateUserMutation: () => ({
            success: false,
          }),
        }),
      );
    });

    expect(spy).toHaveBeenCalledWith(
      { email: 'tito@bonito.com', password: '123456', username: 'tito' },
      expect.anything(), // Should be any function 🤔
    );

    expect(getByText('Failed to create user')).toBeInTheDocument();
  });

  it('show a toast when it successfully creates a user', () => {
    const { getByTestId, getByText } = render(<SignupForm />);
    const username = getByTestId('usernameInput');
    const email = getByTestId('emailInput');
    const password = getByTestId('passwordInput');
    const confirmPassword = getByTestId('confirmPasswordInput');
    const submit = getByTestId('submitButton');
    const preventDefault = jest.fn();
    const spy = jest.spyOn(mutation, 'default');
    const environment = Environment.getEnvironment();
    const router = jest.spyOn(Router, 'push').mockImplementationOnce(jest.fn());

    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.change(confirmPassword, { target: { value: '123456' } });
    fireEvent.change(username, { target: { value: 'tito' } });
    fireEvent.change(email, { target: { value: 'tito@bonito.com' } });

    act(() => {
      fireEvent.click(submit, { preventDefault });
      const operation = environment.mock.getMostRecentOperation();
      environment.mock.resolve(
        operation,
        MockPayloadGenerator.generate(operation, {
          CreateUserMutation: () => ({
            success: true,
          }),
        }),
      );
    });

    expect(spy).toHaveBeenCalledWith(
      { email: 'tito@bonito.com', password: '123456', username: 'tito' },
      expect.anything(), // Should be any function 🤔
    );

    expect(getByText('User was successfully created')).toBeInTheDocument();
    expect(router).toHaveBeenLastCalledWith('/login');
  });
});
