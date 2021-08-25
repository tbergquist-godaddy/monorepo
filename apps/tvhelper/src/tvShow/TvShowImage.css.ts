import { atoms } from '@tbergq/components';
import { composeStyles, style } from '@vanilla-extract/css';

export const classNames = {
  image: composeStyles(
    style({
      minHeight: '300px',
    }),
    atoms({
      borderRadius: 'normal',
    }),
  ),
  favoriteButton: composeStyles(
    style({
      bottom: 10,
      left: 5,
    }),
    atoms({
      position: 'absolute',
      borderRadius: 'round',
    }),
  ),
};
