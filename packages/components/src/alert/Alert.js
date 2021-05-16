// @flow strict

import type { Node, Element } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type AlertType = 'success' | 'danger';
type Props = {
  +children: Node,
  +type: AlertType,
};

export default function Alert({
  children,
  type = 'success',
}: // $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
Props): Element<typeof AlertContainer> {
  return (
    <AlertContainer role="alert" alertType={type}>
      {children}
    </AlertContainer>
  );
}

type AlertContainerProps = {
  +children: Node,
  +alertType: AlertType,
  +role: 'alert',
};

const getAlertType = (type: AlertType, theme: DefaultTheme) => {
  switch (type) {
    case 'danger':
      return theme.alert.danger;
    default:
      return theme.alert.success;
  }
};

// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const AlertContainer: StyledComponent<AlertContainerProps, DefaultTheme, HTMLDivElement> =
  styled.div(({ theme, alertType }) => ({
    borderRadius: '3px',
    padding: theme.spacing.increased,
    ...getAlertType(alertType, theme),
  }));
