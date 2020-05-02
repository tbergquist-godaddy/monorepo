// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';
import type { DefaultTheme } from '@tbergq/theme';

type AlertType = 'success' | 'danger';
type Props = {
  +children: React.Node,
  +type: AlertType,
};

export default function Alert({
  children,
  type = 'success',
}: Props): React.Element<typeof AlertContainer> {
  return (
    <AlertContainer role="alert" alertType={type}>
      {children}
    </AlertContainer>
  );
}

type AlertContainerProps = {
  +children: React.Node,
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

const AlertContainer: StyledComponent<
  AlertContainerProps,
  DefaultTheme,
  HTMLDivElement,
> = styled.div(({ theme, alertType }) => ({
  borderRadius: '3px',
  padding: theme.spacing.increased,
  ...getAlertType(alertType, theme),
}));
