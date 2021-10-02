import { style } from '@vanilla-extract/css';

import { theme } from '../theme.css';

export const classNames = {
  link: style([
    {
      'outline': 'none',
      ':hover': {
        opacity: 0.7,
      },
      ':focus-visible': {
        opacity: 0.7,
      },
      ':visited': {
        color: theme.color['gray.100'],
      },
    },
  ]),
};
