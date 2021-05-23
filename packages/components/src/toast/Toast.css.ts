import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';

const base = composeStyles(
  atoms({
    marginLeft: 'large',
  }),
  style({
    minWidth: '200px',
    transition: 'all 0.3s ease-out',
    selectors: {
      '&:not(:last-of-type)': {
        marginBottom: '16px',
      },
    },
  }),
);

export const classNames = {
  toastWrapper: composeStyles(
    atoms({
      position: 'fixed',
      zIndex: 'onTop',
    }),
    style({
      bottom: '16px',
      right: '16px',
    }),
  ),
  toastVisible: composeStyles(
    base,
    style({
      transform: 'translateX(0px)',
      opacity: 1,
    }),
  ),
  toastHidden: composeStyles(
    base,
    style({
      transform: 'translateX(200px)',
      opacity: 0,
    }),
  ),
};
