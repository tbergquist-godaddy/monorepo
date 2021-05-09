// @flow strict

import type { Node, Element } from 'react';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
// $FlowFixMe[untyped-type-import] $FlowFixMe(>=<150.1>)
import styled, { type StyledComponent } from 'styled-components';
import { type DefaultTheme } from '@tbergq/theme';

import { getColors, type ColorScheme, type Sizes } from './Button';
import Loading from '../loading/Loading';

type Props = {
  +onClick?: () => void,
  +type?: 'button' | 'submit',
  +size?: Sizes,
  +color?: ColorScheme,
  +children: Node,
  +loading?: boolean,
  +dataTest?: string,
  +ariaLabel: string,
};

type SCProps = {
  +'onClick'?: () => void,
  +'type'?: 'button' | 'submit',
  +'buttonSize'?: Sizes,
  +'colorScheme'?: ColorScheme,
  +'children': Node,
  +'disabled': boolean,
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

// $FlowFixMe[value-as-type] $FlowFixMe(>=<150.1>)
const StyledButton: StyledComponent<SCProps, DefaultTheme, HTMLButtonElement> = styled.button(
  ({ theme, colorScheme, disabled, buttonSize }) => ({
    'border': 'none',
    ...getColors(colorScheme, theme),
    ...getButtonSize(buttonSize),
    'cursor': disabled ? 'not-allowed' : 'pointer',
    'backgroundPosition': 'center',
    'transition': 'background 0.8s',
    'opacity': disabled ? '0.65' : '1',
    'borderRadius': '50%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'outline': 'none',
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
}: // $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
Props): Element<typeof StyledButton> {
  return (
    <StyledButton
      disabled={loading}
      {...rest}
      buttonSize={size}
      colorScheme={color}
      aria-label={ariaLabel}
      data-test={dataTest}
    >
      {loading ? <Loading /> : children}
    </StyledButton>
  );
}
