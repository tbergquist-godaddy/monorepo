// @flow strict

import * as React from 'react';
import styled, { type StyledComponent } from 'styled-components';

import { getColors, type ColorScheme, type Sizes } from './Button';
import { type DefaultTheme } from '../types';

type Props = {
  +onClick?: () => void,
  +type?: 'button' | 'submit',
  +size?: Sizes,
  +color?: ColorScheme,
  +children: React.Node,
  +loading?: boolean,
  +dataTest?: string,
  +ariaLabel: string,
};

type SCProps = {
  +onClick?: () => void,
  +type?: 'button' | 'submit',
  +buttonSize?: Sizes,
  +colorScheme?: ColorScheme,
  +children: React.Node,
  +disabled: boolean,
  +'data-test': ?string,
  +'aria-label'?: string,
};

const getButtonSize = (size: Sizes) => {
  switch (size) {
    case 'small':
      return { width: '30px', height: '30px', fontSize: '10px' };
    case 'large':
      return { width: '50px', height: '50px', fontSize: '16px' };
    default:
      return { width: '40px', height: '40px', fontSize: '12px' };
  }
};

const StyledButton: StyledComponent<SCProps, DefaultTheme, HTMLButtonElement> = styled.button(
  ({ theme, colorScheme, disabled, buttonSize }) => ({
    ...getColors(colorScheme, theme.tbergq),
    ...getButtonSize(buttonSize),
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundPosition: 'center',
    transition: 'background 0.8s',
    opacity: disabled ? '0.65' : '1',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    '*': {
      height: '1em',
      width: '1em',
    },
  }),
);

export default function IconButton({
  color = 'primary',
  size = 'normal',
  loading = false,
  children,
  ariaLabel,
  dataTest,
  ...rest
}: Props): React.Element<typeof StyledButton> {
  return (
    <StyledButton
      disabled={loading}
      {...rest}
      buttonSize={size}
      colorScheme={color}
      aria-label={ariaLabel}
      data-test={dataTest}
    >
      {loading ? <div>...</div> : children}
    </StyledButton>
  );
}
