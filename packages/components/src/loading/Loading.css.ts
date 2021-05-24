import { style, composeStyles, keyframes } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';

const wave = keyframes({
  '0%,60%,100%': {
    transform: 'initial',
  },
  '30%': {
    transform: 'translateY(-15px)',
  },
});

export const classNames = {
  wrapper: atoms({ display: 'flex' }),
  dot: composeStyles(
    style({
      'width': `${12 / 16}rem`,
      'height': `${12 / 16}rem`,
      'animation': `${wave} 1.3s linear infinite`,
      ':last-child': {
        marginRight: 0,
        animationDelay: '-.9s',
      },
      'selectors': {
        '&:nth-child(2)': {
          animationDelay: '-1.1s',
        },
      },
    }),
    atoms({
      borderRadius: 'round',
      backgroundColor: 'white',
      marginRight: 'tiny',
    }),
  ),
};
