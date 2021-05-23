// @flow

import type { Element } from 'react';
import {
  render,
  type RenderOptionsWithoutCustomQueries,
  type RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';

function testRenderer(
  ui: Element<any>,
  options?: RenderOptionsWithoutCustomQueries,
): RenderResult<> {
  return render(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>, options);
}

export default testRenderer;
