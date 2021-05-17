import { style, composeStyles, keyframes } from '@vanilla-extract/css';

import { theme } from '../theme.css';
import { atoms } from '../sprinkles.css';

const containerBase = atoms({
  position: 'relative',
  alignSelf: 'center',
});

const container = {
  small: composeStyles(
    containerBase,
    style({
      height: '20px',
      width: '20px',
    }),
  ),
  normal: composeStyles(
    containerBase,
    style({
      height: '40px',
      width: '40px',
    }),
  ),
  page: composeStyles(
    containerBase,
    style({
      height: '80px',
      width: '80px',
    }),
  ),
};

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});
const elementBase = composeStyles(
  atoms({
    position: 'absolute',
    borderRadius: 'round',
  }),
  style({
    borderStyle: 'solid',
    animation: `${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderColor: `${theme.color.secondary} transparent transparent transparent`,
    selectors: {
      '&:nth-child(1)': {
        animationDelay: '-0.45s',
      },
      '&:nth-child(2)': {
        animationDelay: '-0.3s',
      },
      '&:nth-child(3)': {
        animationDelay: '-0.15s',
      },
    },
  }),
);

const element = {
  page: composeStyles(
    elementBase,
    style({
      height: '64px',
      width: '64px',
      margin: '8px',
      borderWidth: '8px',
    }),
  ),
  normal: composeStyles(
    elementBase,
    style({
      height: '32px',
      width: '32px',
      margin: '4px',
      borderWidth: '4px',
    }),
  ),
  small: composeStyles(
    elementBase,
    style({
      height: '16px',
      width: '16px',
      margin: '2px',
      borderWidth: '2px',
    }),
  ),
};

export const classNames = {
  container,
  element,
};
