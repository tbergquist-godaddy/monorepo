// @flow

import * as React from 'react';
import { render, configure } from '@testing-library/react';
import { createMockEnvironment } from 'relay-test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';

import SearchQuery from '../SearchQuery';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

describe('SearchQuery', () => {
  configure({ testIdAttribute: 'data-test' });

  it('renders queryRenderer loader when query is defined', () => {
    const { getByTestId } = render(
      <RelayEnvironmentProvider environment={environment}>
        <SearchQuery query="test" />
      </RelayEnvironmentProvider>,
    );
    expect(getByTestId('queryRenderLoader')).not.toBeNull();
  });

  it('does not render queryRenderer loader when query is empty string', () => {
    const { getByTestId } = render(
      <RelayEnvironmentProvider environment={environment}>
        <SearchQuery query="" />
      </RelayEnvironmentProvider>,
    );
    expect(() => {
      getByTestId('queryRenderLoader');
    }).toThrow();
  });
});
