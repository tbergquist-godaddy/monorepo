// @flow

import * as React from 'react';
import { RelayEnvironmentProvider } from '@tbergq/relay';
import { createMockEnvironment } from 'relay-test-utils';
import { render, act, fireEvent } from '@tbergq/test-utils';

import ChangePasswordForm from '../ChangePasswordForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <RelayEnvironmentProvider environment={environment}>
    <ChangePasswordForm />
  </RelayEnvironmentProvider>
);

const getInputs = (container) => {
  const password = container.querySelector('input[name="password"]');
  const newPassword = container.querySelector('input[name="newPassword"]');
  const confirmPassword = container.querySelector('input[name="confirmPassword"]');

  return {
    password,
    newPassword,
    confirmPassword,
  };
};

it('show required warnings', async () => {
  const { container, getAllByText } = render(<TestRenderer />);

  const button = container.querySelector('button[type="submit"]');
  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.click(button);
  });

  const errors = getAllByText('This field is required');
  expect(errors).toHaveLength(3);
});

it('show error if confirm password does not match new password', async () => {
  const { container, getByText } = render(<TestRenderer />);
  const { password, newPassword, confirmPassword } = getInputs(container);

  const button = container.querySelector('button[type="submit"]');
  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(password, { target: { name: 'password', value: '123' } });
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(confirmPassword, { target: { name: 'confirmPassword', value: '1235' } });
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(newPassword, { target: { name: 'newPassword', value: '1234' } });
  });

  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.click(button);
  });

  const error = getByText('Confirm password does not match new password');
  expect(error).toBeInTheDocument();
});
