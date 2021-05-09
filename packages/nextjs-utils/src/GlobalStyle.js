// @flow strict

import type { ComponentType } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
import { createGlobalStyle } from 'styled-components';

const GlobalStyle: ComponentType<{}> = createGlobalStyle({
  'html': {
    height: '100%',
  },
  'body': {
    fontFamily: 'Roboto, sans-serif',
  },
  '#nprogress .bar': {
    height: '4px',
  },
  '#__next': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '64px',
  },
  '*': {
    boxSizing: 'border-box',
    margin: 0,
  },
});

export default GlobalStyle;
