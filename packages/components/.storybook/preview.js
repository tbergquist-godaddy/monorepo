// @flow

import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { getTokens } from '@kiwicom/orbit-components';
import defaultTheme from '../src/defaultTheme';

const theme = {
  orbit: {
    ...getTokens(),
    fontFamily:
      "'Circular Pro', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
  },
  tbergq: defaultTheme,
}
addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);
