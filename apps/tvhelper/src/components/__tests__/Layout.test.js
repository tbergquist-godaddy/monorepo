// @flow

import * as React from 'react';
import { render } from '@testing-library/react';

import Layout from '../Layout';

it('does not render favorites link when not logged in', () => {
  const { queryByText } = render(
    <Layout isLoggedIn={false}>
      <div />
    </Layout>,
  );
  expect(queryByText('Favorites')).toBeNull();
});

it('renders favorites link when logged in', () => {
  const { getByText } = render(
    <Layout isLoggedIn={true}>
      <div />
    </Layout>,
  );
  expect(getByText('Favorites')).not.toBeNull();
});

it('renders login link when not logged in', () => {
  const { getByText, queryByText } = render(
    <Layout isLoggedIn={false}>
      <div />
    </Layout>,
  );
  expect(getByText('login')).not.toBeNull();
  expect(queryByText('logout')).toBeNull();
});

it('renders logout link when logged in', () => {
  const { queryByText, getByText } = render(
    <Layout isLoggedIn={true}>
      <div />
    </Layout>,
  );
  expect(queryByText('login')).toBeNull();
  expect(getByText('logout')).not.toBeNull();
});
