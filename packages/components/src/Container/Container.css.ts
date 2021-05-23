import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';

export const classNames = {
  container: composeStyles(
    atoms({
      marginX: 'auto',
      paddingX: 'large',
    }),
    style({
      '@media': {
        '(min-width: 768px)': {
          maxWidth: '750px',
        },
        '(min-width: 992px)': {
          maxWidth: '970px',
        },
        '(min-width: 1200px)': {
          maxWidth: '1170px',
        },
      },
    }),
  ),
};
