// @flow

import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';
import { RecoilRoot } from 'recoil';


addDecorator(storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <RecoilRoot>{storyFn()}</RecoilRoot>
  </ThemeProvider>
  )
);
