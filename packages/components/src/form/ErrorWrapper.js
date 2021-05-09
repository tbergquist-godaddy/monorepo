// @flow strict

import type { Node } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type Props = {
  +children: Node,
};
// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const ErrorWrapper: StyledComponent<Props, DefaultTheme, HTMLDivElement> = styled.div(
  ({ theme }) => ({
    color: theme.danger,
    fontSize: theme.fontSize.small,
    marginTop: theme.spacing.tiny,
  }),
);

export default ErrorWrapper;
