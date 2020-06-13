// @flow strict

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';

type Props = {
  +children: React.Node,
  +theme?: $Shape<typeof defaultTheme>,
};

export default function TbergqThemeProvider({
  children,
  theme = null,
}: Props): React.Element<typeof ThemeProvider> {
  return <ThemeProvider theme={{ ...defaultTheme, ...theme }}>{children}</ThemeProvider>;
}
