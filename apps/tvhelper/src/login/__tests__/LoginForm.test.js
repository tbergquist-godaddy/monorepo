// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@tbergq/test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';
import { MockPayloadGenerator, createMockEnvironment } from 'relay-test-utils';
import Router from 'next/router';
import cookie from 'js-cookie';

import LoginForm from '../LoginForm';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

describe('LoginForm', () => {
  it('show login failed message on login error', async () => {
    const { getByTestId, getByText } = render(
      <RelayEnvironmentProvider environment={environment}>
        <LoginForm />
      </RelayEnvironmentProvider>,
    );

    const button = getByTestId('LoginFormSubmit');
    await act(async () => {
      await fireEvent.click(button);
    });

    act(() => {
      environment.mock.resolveMostRecentOperation(operation =>
        MockPayloadGenerator.generate(operation, {
          LoginType: () => ({
            token: null,
            success: false,
          }),
        }),
      );
    });

    expect(getByText('Login failed')).toBeInTheDocument();
  });

  it('handles successfull login', async () => {
    const { getByTestId } = render(
      <RelayEnvironmentProvider environment={environment}>
        <LoginForm />
      </RelayEnvironmentProvider>,
    );

    const button = getByTestId('LoginFormSubmit');
    const spy = jest.spyOn(cookie, 'set').mockImplementationOnce(jest.fn());
    const push = jest.fn();
    jest.spyOn(Router, 'push').mockImplementationOnce(push);

    await act(async () => {
      await fireEvent.click(button);
    });

    act(() => {
      environment.mock.resolveMostRecentOperation(operation =>
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
