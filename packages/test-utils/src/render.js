// @flow

import type { Element } from 'react';
import {
  render,
  type RenderOptionsWithoutCustomQueries,
  type RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import { ToastProvider } from '@tbergq/components';

function testRenderer(
  ui: Element<any>,
  options?: RenderOptionsWithoutCustomQueries,
): RenderResult<> {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <ToastProvider>{ui}</ToastProvider>
    </ThemeProvider>,
    options,
  );
}

export default testRenderer;
