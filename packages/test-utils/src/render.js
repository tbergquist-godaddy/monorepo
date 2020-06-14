// @flow

import * as React from 'react';
import {
  render,
  type RenderOptionsWithoutCustomQueries,
  type RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import { RecoilRoot } from 'recoil';

function testRenderer(
  ui: React.Element<any>,
  options?: RenderOptionsWithoutCustomQueries,
): RenderResult<> {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <RecoilRoot>{ui}</RecoilRoot>
    </ThemeProvider>,
    options,
  );
}

export default testRenderer;
