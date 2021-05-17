import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

const base = composeStyles(
  atoms({
    borderRadius: 'normal',
    cursor: 'pointer',
    outline: 'none',
  }),
  style({
    'border': 'none',
    'lineHeight': 1.5,
    ':hover': {
      transform: 'translateY(-1px)',
    },
    ':active': {
      transform: 'translateY(2px)',
    },
  }),
);
const disabled = atoms({
  cursor: 'not-allowed',
});

export const classNames = {
  base,
  disabled,
  primary: composeStyles(
    style({
      ':focus-visible': {
        boxShadow: `${theme.boxShadow.active} ${theme.color.primaryActive}`,
      },
    }),
    atoms({
      backgroundColor: 'primary',
      color: 'primaryContrast',
      borderColor: 'primary',
    }),
  ),
  secondary: composeStyles(
    style({
      ':focus-visible': {
        boxShadow: `${theme.boxShadow.active} ${theme.color.secondaryActive}`,
      },
    }),
    atoms({
      backgroundColor: 'secondary',
      color: 'secondaryContrast',
    }),
  ),
  danger: composeStyles(
    style({
      ':focus-visible': {
        boxShadow: `${theme.boxShadow.active} ${theme.color.dangerActive}`,
      },
    }),
    atoms({
      backgroundColor: 'danger',
      color: 'dangerContrast',
    }),
  ),
  small: atoms({
    fontSize: 'small',
    paddingX: 'tiny',
    paddingY: 'small',
  }),
  normal: atoms({
    fontSize: 'normal',
    paddingX: 'small',
    paddingY: 'normal',
  }),
  large: atoms({
    fontSize: 'large',
    paddingX: 'normal',
    paddingY: 'increased',
  }),
};
