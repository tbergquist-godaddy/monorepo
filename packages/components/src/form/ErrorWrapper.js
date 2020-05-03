// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type Props = {
  +children: React.Node,
};
const ErrorWrapper: StyledComponent<Props, DefaultTheme, HTMLDivElement> = styled.div(
  ({ theme }) => ({
    color: theme.danger,
    fontSize: theme.fontSize.small,
    marginTop: theme.spacing.tiny,
  }),
);

export default ErrorWrapper;
