// @flow

import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Environment } from '@tbergq/relay';
import { MockPayloadGenerator } from 'relay-test-utils';
import Router from 'next/router';
import cookie from 'js-cookie';

import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  it('show login failed message on login error', () => {
    const environment: any = Environment.getEnvironment();
    const { getByTestId, getByText } = render(<LoginForm />);

    const button = getByTestId('LoginFormSubmit');
    act(() => {
      fireEvent.click(button);
      const operation = environment.mock.getMostRecentOperation();
      environment.mock.resolve(
        operation,
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

  it('handles successfull login', () => {
    const environment: any = Environment.getEnvironment();
    const { getByTestId } = render(<LoginForm />);

    const button = getByTestId('LoginFormSubmit');
    const spy = jest.spyOn(cookie, 'set').mockImplementationOnce(jest.fn());
    const push = jest.fn();
    jest.spyOn(Router, 'push').mockImplementationOnce(push);
    act(() => {
      fireEvent.click(button);
      const operation = environment.mock.getMostRecentOperation();
      environment.mock.resolve(
        operation,
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
