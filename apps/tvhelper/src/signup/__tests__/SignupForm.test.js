// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@tbergq/test-utils';
import { Environment } from '@tbergq/relay';
import { MockPayloadGenerator } from 'relay-test-utils';
import Router from 'next/router';
import { Toast } from '@tbergq/components';

import SignUp from '../SignupForm';
import * as mutation from '../mutation/createUserMutation';

const SignupForm = () => (
  <>
    <SignUp />
    <Toast />
  </>
);

describe('SignupForm', () => {
  it('handles username change', async () => {
    const { getByDisplayValue, getByTestId } = render(<SignupForm />);

    const input = getByTestId('usernameInput');
    await act(async () => {
      await fireEvent.change(input, { target: { value: 'don_tito' } });
    });

    expect(getByDisplayValue('don_tito')).toBeInTheDocument();
  });

  it('handles emailInput change', async () => {
    const { getByTestId, getByDisplayValue } = render(<SignupForm />);
    const email = 'tito@bonito.com';
    const input = getByTestId('emailInput');
    await act(async () => {
      await fireEvent.change(input, { target: { value: email } });
    });

    expect(getByDisplayValue(email)).toBeInTheDocument();
  });

  it('handles password change', async () => {
    const { getByTestId, getByDisplayValue } = render(<SignupForm />);
    const password = '123456'; // 😍
    const input = getByTestId('passwordInput');
    await act(async () => {
      await fireEvent.change(input, { target: { value: password } });
    });

    expect(getByDisplayValue(password)).toBeInTheDocument();
  });

  it('handles confirmPassword change', async () => {
    const { getByTestId, getByDisplayValue } = render(<SignupForm />);
    const password = '123456'; // 😍
    const input = getByTestId('confirmPasswordInput');
    await act(async () => {
      await fireEvent.change(input, { target: { value: password } });
    });

    expect(getByDisplayValue(password)).toBeInTheDocument();
  });

  it('show a toast when password and confirmPassword does not match', async () => {
    const { getByTestId, getByText } = render(<SignupForm />);
    const password = getByTestId('passwordInput');
    const confirmPassword = getByTestId('confirmPasswordInput');
    const submit = getByTestId('submitButton');
    const preventDefault = jest.fn();
    const spy = jest.spyOn(mutation, 'default');

    await act(async () => {
      fireEvent.change(password, { target: { value: '123456' } });
      fireEvent.change(confirmPassword, { target: { value: '12345' } });
      await fireEvent.click(submit, { preventDefault });
    });

    expect(getByText('password and confirm password does not match')).toBeInTheDocument();
    expect(spy).not.toHaveBeenCalled();
  });

  it('show a toast when it fails to create a user', async () => {
    const { getByTestId, getByText } = render(<SignupForm />);
    const username = getByTestId('usernameInput');
    const email = getByTestId('emailInput');
    const password = getByTestId('passwordInput');
    const confirmPassword = getByTestId('confirmPasswordInput');
    const submit = getByTestId('submitButton');
    const preventDefault = jest.fn();
    const spy = jest.spyOn(mutation, 'default');
    const environment: any = Environment.getEnvironment();

    act(() => {
      fireEvent.change(password, { target: { value: '123456' } });
      fireEvent.change(confirmPassword, { target: { value: '123456' } });
      fireEvent.change(username, { target: { value: 'tito' } });
      fireEvent.change(email, { target: { value: 'tito@bonito.com' } });
    });
    await act(async () => {
      await fireEvent.click(submit, { preventDefault });
    });

    act(() => {
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

  it('show a toast when it successfully creates a user', async () => {
    const { getByTestId, getByText } = render(<SignupForm />);
    const username = getByTestId('usernameInput');
    const email = getByTestId('emailInput');
    const password = getByTestId('passwordInput');
    const confirmPassword = getByTestId('confirmPasswordInput');
    const submit = getByTestId('submitButton');
    const preventDefault = jest.fn();
    const spy = jest.spyOn(mutation, 'default');
    const environment: any = Environment.getEnvironment();
    const router = jest.spyOn(Router, 'push').mockImplementationOnce(jest.fn());

    act(() => {
      fireEvent.change(password, { target: { value: '123456', name: 'password' } });
      fireEvent.change(confirmPassword, { target: { value: '123456', name: 'confirmPassword' } });
      fireEvent.change(username, { target: { value: 'tito', name: 'username' } });
      fireEvent.change(email, { target: { value: 'tito@bonito.com', name: 'email' } });
    });
    await act(async () => {
      await fireEvent.click(submit, { preventDefault });
    });

    act(() => {
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
