// @flow strict

import type { Node, Element } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';
import { type DefaultTheme, type ThemeColors } from '@tbergq/theme';

import Loading from '../loading/Loading';

export type ColorScheme = 'primary' | 'secondary' | 'success' | 'danger';
export type Sizes = 'small' | 'normal' | 'large';
type Props = {
  +onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void | Promise<void>,
  +type?: 'button' | 'submit',
  +size?: Sizes,
  +color?: ColorScheme,
  +children: Node,
  +loading?: boolean,
  +dataTest?: string,
  +ariaLabel?: string,
};

export const getColors = (colorScheme: ColorScheme, theme: DefaultTheme): ThemeColors => {
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
  +'onClick'?: (e: SyntheticEvent<HTMLButtonElement>) => void | Promise<void>,
  +'type'?: 'button' | 'submit',
  +'buttonSize'?: Sizes,
  +'colorScheme'?: ColorScheme,
  +'children': Node,
  +'disabled': boolean,
  +'data-test': ?string,
  +'aria-label'?: string,
};

const getHeight = (size: Sizes) => {
  switch (size) {
    case 'small':
      return '32px';
    case 'large':
      return '52px';
    default:
      return '46px';
  }
};

// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const StyledButton: StyledComponent<SCProps, DefaultTheme, HTMLButtonElement> = styled.button(
  ({ colorScheme, theme, buttonSize, disabled }) => ({
    border: 'none',
    ...getColors(colorScheme, theme),
    ...getFontSize(buttonSize, theme),
    fontFamily: theme.fontFamily,
    fontWeight: 500,
    outline: 'none',
    borderRadius: '3px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundPosition: 'center',
    transition: 'background 0.8s',
    opacity: disabled ? '0.65' : '1',
    height: getHeight(buttonSize),
  }),
);

// TODO: Proper loading component
export default function Button({
  size,
  color,
  loading,
  children,
  dataTest,
  ariaLabel,
  ...rest
}: // $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
Props): Element<typeof StyledButton> {
  return (
    <StyledButton
      aria-label={ariaLabel}
      data-test={dataTest}
      disabled={loading === true}
      {...rest}
      colorScheme={color}
      buttonSize={size}
    >
      {loading === true ? <Loading /> : children}
    </StyledButton>
  );
}

Button.defaultProps = {
  type: 'button',
  size: 'normal',
  color: 'primary',
};
