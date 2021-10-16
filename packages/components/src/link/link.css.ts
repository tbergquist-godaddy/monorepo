import { style } from '@vanilla-extract/css';

import { theme } from '../theme.css';
import { atoms } from '../sprinkles.css';

export const classNames = {
  link: style([
    atoms({
      outline: 'none',
      paddingY: 'normal',
    }),
    {
      ':hover': {
        opacity: 0.7,
      },
      ':focus-visible': {
        opacity: 0.7,
      },
      ':visited': {
        color: theme.color.linkVisited,
      },
    },
  ]),
};
