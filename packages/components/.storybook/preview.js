// @flow

import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';


addDecorator(storyFn => <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>);
