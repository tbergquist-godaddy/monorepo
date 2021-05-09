// @flow strict

import type { Node, Element } from 'react';
import styled, { type StyledComponent } from 'styled-components';

type Size = 'page' | 'normal' | 'small';

type SpinnerProps = {
  +'children': Node,
  +'spinSize': Size,
  +'data-test': ?string,
};

const getSpinSize = (size: Size) => {
  switch (size) {
    case 'small':
      return {
        height: '20px',
        width: '20px',
      };
    case 'normal':
      return {
        height: '40px',
        width: '40px',
      };
    default:
      return {
        height: '80px',
        width: '80px',
      };
  }
};

const SpinnerContainer: StyledComponent<SpinnerProps, void, HTMLDivElement> = styled.div(
  ({ spinSize }) => ({
    position: 'relative',
    alignSelf: 'center',
    ...getSpinSize(spinSize),
  }),
);

const getElementSize = (size: Size) => {
  switch (size) {
    case 'small':
      return {
        height: '16px',
        width: '16px',
        margin: '2px',
        border: '2px solid',
      };
    case 'normal':
      return {
        height: '32px',
        width: '32px',
        margin: '4px',
        border: '4px solid',
      };
    default:
      return {
        height: '64px',
        width: '64px',
        margin: '8px',
        border: '8px solid',
      };
  }
};

const SpinnerElement = styled.div(({ spinSize, theme }) => ({
  ...getElementSize(spinSize),
  'boxSizing': 'border-box',
  'position': 'absolute',
  'borderRadius': '50%',
  'borderColor': `${theme.secondary} transparent transparent transparent`,
  'animation': 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  ':nth-child(1)': {
    animationDelay: '-0.45s',
  },
  ':nth-child(2)': {
    animationDelay: '-0.3s',
  },
  ':nth-child(3)': {
    animationDelay: '-0.15s',
  },
}));

type Props = {
  +size?: Size,
  +dataTest?: string,
};

export default function Spinner({
  size = 'page',
  dataTest,
}: Props): Element<typeof SpinnerContainer> {
  return (
    <SpinnerContainer data-test={dataTest} spinSize={size}>
      <SpinnerElement spinSize={size} />
      <SpinnerElement spinSize={size} />
      <SpinnerElement spinSize={size} />
      <SpinnerElement spinSize={size} />
    </SpinnerContainer>
  );
}
