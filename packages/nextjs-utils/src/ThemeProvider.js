// @flow strict

import type { Node, Element } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';

type Props = {
  +children: Node,
  +theme?: $Shape<typeof defaultTheme>,
};

export default function TbergqThemeProvider({
  children,
  theme = null,
}: Props): Element<typeof ThemeProvider> {
  return <ThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</ThemeProvider>;
}
