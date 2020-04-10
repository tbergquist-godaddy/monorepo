// @flow

import * as React from 'react';
import { render } from '@tbergq/test-utils';
import { createMockEnvironment } from 'relay-test-utils';
import { RelayEnvironmentProvider } from '@tbergq/relay';

import SearchQuery from '../SearchQuery';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

describe('SearchQuery', () => {
  it('renders queryRenderer loader when query is defined', () => {
    const { getByTestId } = render(
      <RelayEnvironmentProvider environment={environment}>
        <SearchQuery query="test" />
      </RelayEnvironmentProvider>,
    );
    expect(getByTestId('queryRenderLoader')).toBeInTheDocument();
  });
});
