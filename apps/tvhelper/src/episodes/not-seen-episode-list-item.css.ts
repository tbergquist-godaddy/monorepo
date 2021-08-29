import { theme } from '@tbergq/components';
import { style } from '@vanilla-extract/css';

const hoverFocus = {
  backgroundColor: theme.color.gray,
  outline: 'none',
};

export const classNames = {
  link: style({
    ':hover': hoverFocus,
    ':focus': hoverFocus,
  }),
};
