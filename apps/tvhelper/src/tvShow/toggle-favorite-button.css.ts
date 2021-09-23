import { atoms } from '@tbergq/components';
import { style } from '@vanilla-extract/css';

export const classNames = {
  favoriteButton: style([
    atoms({
      position: 'absolute',
      borderRadius: 'round',
    }),
    {
      bottom: 10,
      left: 5,
    },
  ]),
};
