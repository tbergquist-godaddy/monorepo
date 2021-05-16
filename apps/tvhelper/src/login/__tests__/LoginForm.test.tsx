import { render, act, userEvent, screen, waitFor } from '@tbergq/test-utils';
import { RelayEnvironmentProvider } from 'react-relay';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import Router from 'next/router';
import cookie from 'js-cookie';
import { Toast } from '@tbergq/components';

import LoginForm from '../LoginForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

describe('LoginForm', () => {
  it('show login failed message on login error', async () => {
    render(
      <RelayEnvironmentProvider environment={environment}>
        <LoginForm />
        <Toast />
      </RelayEnvironmentProvider>,
    );

    const button = screen.getByRole('button', { name: /login/i });
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');

    await userEvent.type(username, 'user');
    await userEvent.type(password, 'pw');
    await userEvent.click(button);
    await waitFor(() => expect(button).toBeDisabled());

    act(() => {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, {
          LoginType: () => ({
            token: null,
            success: false,
          }),
        }),
      );
    });

    expect(screen.getByText('Login failed')).toBeInTheDocument();
  });

  it('handles successfull login', async () => {
    render(
      <RelayEnvironmentProvider environment={environment}>
        <LoginForm />
      </RelayEnvironmentProvider>,
    );

    const button = screen.getByRole('button', { name: /login/i });
    const spy = jest.spyOn(cookie, 'set').mockImplementationOnce(jest.fn());
    const push = jest.fn();
    jest.spyOn(Router, 'push').mockImplementationOnce(push);

    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');

    await userEvent.type(username, 'user');
    await userEvent.type(password, 'pw');
    await userEvent.click(button);

    await waitFor(() => expect(button).toBeDisabled());
    act(() => {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, {
          LoginType: () => ({
            token: 'myValidToken',
            success: true,
          }),
        }),
      );
    });

    expect(spy).toHaveBeenCalledWith('tokenKey', 'myValidToken', { expires: 365 });
    expect(push).toHaveBeenCalledWith({ pathname: '/favorites' });
  });
});
