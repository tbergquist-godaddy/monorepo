// @flow

import * as React from 'react';
import { render } from '@testing-library/react';

import SearchQuery from '../SearchQuery';

describe('SearchQuery', () => {
  it('renders queryRenderer loader when query is defined', () => {
    const { findByTestId } = render(<SearchQuery query="test" />);
    expect(findByTestId('queryRenderLoader')).not.toBeNull();
  });

  it('does not render queryRenderer loader when query is empty string', () => {
    const { queryByTestId } = render(<SearchQuery query="" />);
    expect(queryByTestId('queryRenderLoader')).toBeNull();
  });
});
