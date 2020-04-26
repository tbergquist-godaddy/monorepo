// @flow

import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@tbergq/test-utils';
import defaultTheme from '@tbergq/theme';

import Button from '../Button';

it('calls onClick callback', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>test</Button>);

  const button = screen.getByText('test');
  fireEvent.click(button);
  // Called with click event
  expect(onClick).toHaveBeenCalledWith(expect.any(Object));
});

it('has correct colors', () => {
  render(
    <>
      <Button>primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="danger">danger</Button>
    </>,
  );

  const primary = screen.getByText('primary');
  const secondary = screen.getByText('secondary');
  const danger = screen.getByText('danger');

  expect(primary).toHaveStyle(`background-color: ${defaultTheme.primary}`);
  expect(secondary).toHaveStyle(`background-color: ${defaultTheme.secondary}`);
  expect(danger).toHaveStyle(`background-color: ${defaultTheme.danger}`);
});

it('handles loading state', () => {
  render(
    <Button dataTest="loading" loading={true}>
      primary
    </Button>,
  );

  expect(screen.queryByText('primary')).not.toBeInTheDocument();
  const button = screen.getByTestId('loading');

  expect(button).toBeInTheDocument();
  expect(button.getAttribute('disabled')).toBe('');
});
