// @flow

import * as React from 'react';
import { render, configure } from '@testing-library/react';

import SearchQuery from '../SearchQuery';

describe('SearchQuery', () => {
  configure({ testIdAttribute: 'data-test' });

  it('renders queryRenderer loader when query is defined', () => {
    const { getByTestId } = render(<SearchQuery query="test" />);
    expect(getByTestId('queryRenderLoader')).not.toBeNull();
  });

  it('does not render queryRenderer loader when query is empty string', () => {
    const { getByTestId } = render(<SearchQuery query="" />);
    expect(() => {
      getByTestId('queryRenderLoader');
    }).toThrow();
  });
});
