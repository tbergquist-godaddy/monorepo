import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

const base = style([
  atoms({
    borderRadius: 'normal',
    cursor: 'pointer',
    outline: 'none',
  }),
  {
    'border': 'none',
    'lineHeight': 1.5,
    ':hover': {
      transform: 'translateY(-1px)',
    },
    ':active': {
      transform: 'translateY(2px)',
    },
  },
]);
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
  success: style([
    style([
      atoms({
        backgroundColor: 'success',
        color: 'white',
      }),
      {
        ':focus-visible': {
          boxShadow: `${theme.boxShadow.active} ${theme.color.dangerActive}`,
        },
      },
    ]),
  ]),
  white: style([
    atoms({
      color: 'black',
      backgroundColor: 'white',
    }),
    {
      ':focus-visible': {
        boxShadow: `${theme.boxShadow.active} ${theme.color.whiteActive}`,
      },
      ':hover': {
        boxShadow: `${theme.boxShadow.active} ${theme.color.whiteActive}`,
      },
      'transition': 'box-shadow 0.2s ease-in-out',
    },
  ]),
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
  link: atoms({ textDecoration: 'none' }),
};
