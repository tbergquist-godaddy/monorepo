// @flow strict

import type { Node } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const Container: StyledComponent<{ +children: Node }, DefaultTheme, HTMLDivElement> = styled.div(
  ({ theme }) => ({
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
  }),
);

export default Container;
