// @flow

import * as React from 'react';
import {
  render,
  type RenderOptionsWithoutCustomQueries,
  type RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import { getTokens } from '@kiwicom/orbit-components';

const theme = {
  orbit: {
    ...getTokens(),
    fontFamily: defaultTheme.fontFamily,
  },
  ...defaultTheme,
};

function testRenderer(
  ui: React.Element<any>,
  options?: RenderOptionsWithoutCustomQueries,
): RenderResult<> {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}

export default testRenderer;
