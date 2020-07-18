// @flow

import * as React from 'react';
import { render, screen, createMockEnvironment, waitFor, act, userEvent } from '@tbergq/test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';
import * as router from 'next/router';
import { Toast } from '@tbergq/components';

import SignupForm from '../SignupForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <>
      <SignupForm />
      <Toast />
    </>
  </RelayEnvironmentProvider>
);

it('redirects to login after user is created', async () => {
  const push = jest.fn();
  jest.spyOn(router, 'useRouter').mockImplementation(() => ({
    push,
  }));
  render(<TestRenderer />);

  const username = screen.getByLabelText(/username/i);
  const email = screen.getByLabelText(/email/i);
  const password = screen.getByLabelText(/^password$/i);
  const confirmPassword = screen.getByLabelText(/confirm password/i);
  const submit = screen.getByRole('button', { name: /^confirm$/i });
  userEvent.type(username, 'test');
  userEvent.type(email, 'test@test.no');
  userEvent.type(password, 'test');
  userEvent.type(confirmPassword, 'test');
  await waitFor(() => expect(username).toHaveValue('test'));

  userEvent.click(submit);
  await waitFor(() => expect(submit).toBeDisabled());
  act(() => {
    environment.mock.resolveMostRecentOperation(() => {
      return {
        data: {
          createUser: {
            __typename: 'User',
          },
        },
      };
    });
  });

  expect(
    screen.getByText(/User successfully created, you are being redirect to login page/i),
  ).toBeInTheDocument();

  act(() => {
    jest.runAllTimers();
  });
  expect(push).toHaveBeenCalledWith('/login');
});

it('shows error message to the user', async () => {
  const push = jest.fn();
  jest.spyOn(router, 'useRouter').mockImplementation(() => ({
    push,
  }));
  render(<TestRenderer />);

  const username = screen.getByLabelText(/username/i);
  const email = screen.getByLabelText(/email/i);
  const password = screen.getByLabelText(/^password$/i);
  const confirmPassword = screen.getByLabelText(/confirm password/i);
  const submit = screen.getByRole('button', { name: /^confirm$/i });
  userEvent.type(username, 'test');
  userEvent.type(email, 'test@test.no');
  userEvent.type(password, 'test');
  userEvent.type(confirmPassword, 'test');
  await waitFor(() => expect(username).toHaveValue('test'));

  userEvent.click(submit);
  await waitFor(() => expect(submit).toBeDisabled());
  act(() => {
    environment.mock.resolveMostRecentOperation(() => {
      return { data: { createUser: { __typename: 'CreateUserError', reason: 'USERNAME_EXISTS' } } };
    });
  });
  expect(screen.getByText(/Username is already taken/i)).toBeInTheDocument();

  expect(push).not.toHaveBeenCalled();

  userEvent.click(submit);
  await waitFor(() => expect(submit).toBeDisabled());
  act(() => {
    environment.mock.resolveMostRecentOperation(() => {
      return { data: { createUser: { __typename: 'CreateUserError', reason: 'EMAIL_EXISTS' } } };
    });
  });

  await waitFor(() => expect(screen.getByText(/Email already exists/i)).toBeInTheDocument());

  expect(push).not.toHaveBeenCalled();
});
