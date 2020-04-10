// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';

import { type DefaultTheme } from '../types';

type ColorScheme = 'primary' | 'secondary' | 'success' | 'danger';
type Sizes = 'small' | 'normal' | 'large';
type Props = {
  +onClick?: () => void,
  +type?: 'button' | 'submit',
  +size?: Sizes,
  +color?: ColorScheme,
  +children: React.Node,
  +loading?: boolean,
  +dataTest?: string,
  +circled?: boolean,
  +ariaLabel?: string,
};

const getColors = (colorScheme: ColorScheme, theme: DefaultTheme) => {
  switch (colorScheme) {
    case 'secondary':
      return theme.button.secondary;
    case 'danger':
      return theme.button.danger;
    default:
      return theme.button.primary;
  }
};

const getFontSize = (size: Sizes, theme: DefaultTheme) => {
  switch (size) {
    case 'small':
      return theme.button.small;
    case 'large':
      return theme.button.large;
    default:
      return theme.button.normal;
  }
};

type SCProps = {
  +onClick?: () => void,
  +type?: 'button' | 'submit',
  +buttonSize?: Sizes,
  +colorScheme?: ColorScheme,
  +children: React.Node,
  +disabled: boolean,
  +'data-test': ?string,
  +isRound: boolean,
  +'aria-label'?: string,
};

const StyledButton: StyledComponent<SCProps, DefaultTheme, HTMLButtonElement> = styled.button(
  ({ colorScheme, theme, buttonSize, disabled, isRound }) => ({
    ...getColors(colorScheme, theme.tbergq),
    ...getFontSize(buttonSize, theme.tbergq),
    fontFamily: theme.tbergq.fontFamily,
    fontWeight: 500,
    outline: 'none',
    borderRadius: isRound ? '50%' : '3px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundPosition: 'center',
    transition: 'background 0.8s',
    opacity: disabled ? '0.65' : '1',
  }),
);

// TODO: Proper loading component
export default function Button({
  size,
  color,
  loading,
  children,
  dataTest,
  circled,
  ariaLabel,
  ...rest
}: Props): React.Element<typeof StyledButton> {
  return (
    <StyledButton
      aria-label={ariaLabel}
      isRound={circled ?? false}
      data-test={dataTest}
      disabled={loading === true}
      {...rest}
      colorScheme={color}
      buttonSize={size}
    >
      {loading === true ? <div>...</div> : children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  size: 'normal',
  color: 'primary',
};
