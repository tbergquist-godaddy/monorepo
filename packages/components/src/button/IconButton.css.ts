import { style } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { classNames as buttonClassNames } from './Button.css';

export const classNames = {
  base: style([
    buttonClassNames.base,
    atoms({
      borderRadius: 'round',
    }),
    {
      lineHeight: 0,
    },
  ]),
  small: atoms({
    fontSize: 'small',
    padding: 'small',
  }),
  normal: atoms({
    fontSize: 'normal',
    padding: 'normal',
  }),
  large: atoms({
    fontSize: 'large',
    padding: 'increased',
  }),
  white: atoms({
    background: 'none',
    backgroundColor: 'white',
  }),
  danger: atoms({
    backgroundColor: 'danger',
  }),
  icon: style({
    height: '1rem',
    width: '1rem',
  }),
  largeIcon: style({
    height: `${20 / 16}rem`,
    width: `${20 / 16}rem`,
  }),
};
