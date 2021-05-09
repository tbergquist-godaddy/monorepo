// @flow strict

import type { Node, Element } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';

type Props = {
  +children: Node,
  +theme?: $Shape<typeof defaultTheme>,
};

export default function TbergqThemeProvider({
  children,
  // $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
  theme = null,
}: Props): Element<typeof ThemeProvider> {
  return <ThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</ThemeProvider>;
}
