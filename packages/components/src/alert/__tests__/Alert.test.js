// @flow

import * as React from 'react';
import theme from '@tbergq/theme';
import { render, screen } from '@tbergq/test-utils';

import Alert from '../Alert';

it('has correct backgroundColor for type success', () => {
  render(<Alert type="success">Success alert</Alert>);
  const alert = screen.getByText('Success alert');

  expect(alert).toBeInTheDocument();
  expect(alert).toHaveStyle(`background-color: ${theme.alert.success.backgroundColor}`);
});

it('has correct backgroundColor for type danger', () => {
  render(<Alert type="danger">Danger alert</Alert>);
  const alert = screen.getByText('Danger alert');

  expect(alert).toBeInTheDocument();
  expect(alert).toHaveStyle(`background-color: ${theme.alert.danger.backgroundColor}`);
});
