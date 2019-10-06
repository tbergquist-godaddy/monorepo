// @flow

import * as React from 'react';
import { render, configure } from '@testing-library/react';

import SearchQuery from '../SearchQuery';

describe('SearchQuery', () => {
  configure({ testIdAttribute: 'data-testid' });

  it('renders queryRenderer loader when query is defined', () => {
    const { getByTestId } = render(<SearchQuery query="test" />);
    expect(getByTestId('queryRenderLoader')).not.toBeNull();
  });

  it('does not render queryRenderer loader when query is empty string', async () => {
    const { queryByTestId } = render(<SearchQuery query="" />);
    const qr = await queryByTestId('queryRenderLoader');
    expect(qr).toBeNull();
  });
});
