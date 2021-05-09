// @flow strict

import type { Node } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type Props = {
  +children: Node | void,
};
// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const LabelText: StyledComponent<Props, DefaultTheme, HTMLDivElement> = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.large,
  marginBottom: theme.spacing.tiny,
}));

export default LabelText;
