import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { classNames as buttonClassNames } from './Button.css';

export const classNames = {
  base: composeStyles(
    buttonClassNames.base,
    style({
      lineHeight: 1,
    }),
  ),
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
};
