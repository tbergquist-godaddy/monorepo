import { style, composeStyles } from '@vanilla-extract/css';
import { atoms } from '@tbergq/components';

const navLink = composeStyles(
  atoms({
    color: 'gray',
  }),
  style({
    'textDecoration': 'none',
    ':hover': {
      color: '#fff',
    },
    ':focus': {
      color: '#fff',
    },
  }),
);

export const classNames = {
  navLink,
};
