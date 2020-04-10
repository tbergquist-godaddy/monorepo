// @flow

import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { getTokens } from '@kiwicom/orbit-components';
import defaultTheme from '../src/defaultTheme';

const theme = {
  orbit: {
    ...getTokens(),
    fontFamily: defaultTheme.fontFamily,
  },
  ...defaultTheme,
}
addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);
