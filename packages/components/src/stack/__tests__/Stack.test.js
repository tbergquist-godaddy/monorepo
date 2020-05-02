// @flow

import * as React from 'react';
import { render, screen } from '@tbergq/test-utils';

import Stack from '../Stack';

it('gives margin bottom', () => {
  render(
    <Stack>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Stack>,
  );

  const first = screen.getByText('First');
  const second = screen.getByText('Second');
  const third = screen.getByText('Third');

  expect(first).toHaveStyle('margin-bottom: 18px');
  expect(second).toHaveStyle('margin-bottom: 18px');
  expect(third).toHaveStyle('margin: 0');
});

it('gives margin right and flex', () => {
  render(
    <Stack dataTest="stack" flex={true}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Stack>,
  );

  const first = screen.getByText('First');
  const second = screen.getByText('Second');
  const third = screen.getByText('Third');

  expect(first).toHaveStyle('margin-right: 18px');
  expect(second).toHaveStyle('margin-right: 18px');
  expect(third).toHaveStyle('margin: 0');
  expect(screen.getByTestId('stack')).toHaveStyle('display: flex');
});

it('gives margin botton', () => {
  render(
    <Stack dataTest="stack" spaceAfter="normal">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Stack>,
  );

  expect(screen.getByTestId('stack')).toHaveStyle('margin-bottom: 12px');
});
