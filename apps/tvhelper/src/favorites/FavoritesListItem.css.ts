import { style, composeStyles } from '@vanilla-extract/css';
import { atoms } from '@tbergq/components';

export const classNames = {
  imageFallback: composeStyles(
    atoms({
      borderRadius: 'round',
      backgroundColor: 'gray',
    }),
    style({
      height: '50px',
      width: '50px',
    }),
  ),
};
