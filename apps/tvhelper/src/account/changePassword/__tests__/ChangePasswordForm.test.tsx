import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment } from 'relay-test-utils';
import { render, screen } from '@tbergq/test-utils';
import userEvent from '@testing-library/user-event';

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
  const { container, findAllByText } = render(<TestRenderer />);

  const button = container.querySelector('button[type="submit"]');
  userEvent.click(button);

  const errors = await findAllByText(/is a required field/i);
  expect(errors).toHaveLength(3);
});

it('show error if confirm password does not match new password', async () => {
  const { container } = render(<TestRenderer />);
  const { password, newPassword, confirmPassword } = getInputs(container);

  const button = container.querySelector('button[type="submit"]');
  await userEvent.type(password, '123');
  await userEvent.type(confirmPassword, '1235');
  await userEvent.type(newPassword, '1234');
  await userEvent.click(button);

  const error = await screen.findByText("Passwords don't match");
  expect(error).toBeInTheDocument();
});
