// @flow strict

import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@tbergq/theme';

type Props = {
  +children: React.Node,
};

export default function TbergqThemeProvider(props: Props): React.Element<typeof ThemeProvider> {
  return <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>;
}
