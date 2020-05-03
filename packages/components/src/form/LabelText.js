// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type Props = {
  +children: React.Node | void,
};
const LabelText: StyledComponent<Props, DefaultTheme, HTMLDivElement> = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.large,
  marginBottom: theme.spacing.tiny,
}));

export default LabelText;
