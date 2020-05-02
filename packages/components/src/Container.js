// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

const Container: StyledComponent<
  { +children: React.Node },
  DefaultTheme,
  HTMLDivElement,
> = styled.div(({ theme }) => ({
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  [theme.media.tablet]: {
    width: '750px',
  },
  [theme.media.desktop]: {
    width: '970px',
  },
  [theme.media.largeDesktop]: {
    width: '1170px',
  },
}));

export default Container;
