// @flow strict

import type { Node } from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type Props = {
  +children: Node,
};
const ErrorWrapper: StyledComponent<Props, DefaultTheme, HTMLDivElement> = styled.div(
  ({ theme }) => ({
    color: theme.danger,
    fontSize: theme.fontSize.small,
    marginTop: theme.spacing.tiny,
  }),
);

export default ErrorWrapper;
