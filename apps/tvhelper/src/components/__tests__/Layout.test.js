// @flow

import * as React from 'react';
import { render } from '@testing-library/react';
import { isLoggedIn } from '@tbergq/utils';

import Layout from '../Layout';

jest.mock('@tbergq/utils', () => ({
  isLoggedIn: jest.fn(),
}));

it('does not render favorites link when not logged in', () => {
  // $FlowExpectedError: flow does not know this is a mock
  isLoggedIn.mockReturnValueOnce(false);
  const { queryByText } = render(
    <Layout>
      <div />
    </Layout>,
  );
  expect(queryByText('Favorites')).toBeNull();
});

it('renders favorites link when logged in', () => {
  // $FlowExpectedError: flow does not know this is a mock
  isLoggedIn.mockReturnValueOnce(true);
  const { getByText } = render(
    <Layout>
      <div />
    </Layout>,
  );
  expect(getByText('Favorites')).not.toBeNull();
});

it('renders login link when not logged in', () => {
  // $FlowExpectedError: flow does not know this is a mock
  isLoggedIn.mockReturnValueOnce(false);
  const { getByText, queryByText } = render(
    <Layout>
      <div />
    </Layout>,
  );
  expect(getByText('login')).not.toBeNull();
  expect(queryByText('logout')).toBeNull();
});

it('renders logout link when logged in', () => {
  // $FlowExpectedError: flow does not know this is a mock
  isLoggedIn.mockReturnValueOnce(true);
  const { queryByText, getByText } = render(
    <Layout>
      <div />
    </Layout>,
  );
  expect(queryByText('login')).toBeNull();
  expect(getByText('logout')).not.toBeNull();
});
