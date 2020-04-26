// @flow

import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { MdFavorite } from 'react-icons/md';
import defaultTheme from '@tbergq/theme';
import { render } from '@tbergq/test-utils';

import IconButton from '../IconButton';

it('calls onClick callback', () => {
  const onClick = jest.fn();
  render(
    <IconButton dataTest="button" ariaLabel="test" onClick={onClick}>
      <MdFavorite />
    </IconButton>,
  );

  const button = screen.getByTestId('button');
  fireEvent.click(button);
  // Called with click event
  expect(onClick).toHaveBeenCalledWith(expect.any(Object));
});

it('has correct colors', () => {
  render(
    <>
      <IconButton dataTest="primary" ariaLabel="test">
        <MdFavorite />
      </IconButton>
      <IconButton ariaLabel="test" dataTest="secondary" color="secondary">
        <MdFavorite />
      </IconButton>
      <IconButton ariaLabel="test" dataTest="danger" color="danger">
        <MdFavorite />
      </IconButton>
    </>,
  );

  const primary = screen.getByTestId('primary');
  const secondary = screen.getByTestId('secondary');
  const danger = screen.getByTestId('danger');

  expect(primary).toHaveStyle(`background-color: ${defaultTheme.primary}`);
  expect(secondary).toHaveStyle(`background-color: ${defaultTheme.secondary}`);
  expect(danger).toHaveStyle(`background-color: ${defaultTheme.danger}`);
});

it('handles loading state', () => {
  render(
    <IconButton ariaLabel="test" dataTest="loading" loading={true}>
      <MdFavorite data-test="favorite" />
    </IconButton>,
  );

  expect(screen.queryByTestId('favorite')).not.toBeInTheDocument();
  const button = screen.getByTestId('loading');

  expect(button).toBeInTheDocument();
  expect(button.getAttribute('disabled')).toBe('');
});
