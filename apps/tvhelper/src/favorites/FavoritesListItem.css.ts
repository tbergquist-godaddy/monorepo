import { style } from '@vanilla-extract/css';
import { theme } from '@tbergq/components';

export const classNames = {
  imageFallback: style({
    backgroundColor: theme.color.gray,
    borderRadius: '50%',
    height: '50px',
    width: '50px',
  }),
};
