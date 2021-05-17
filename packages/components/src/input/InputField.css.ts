import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

export const classNames = {
  label: atoms({
    display: 'block',
  }),
  input: composeStyles(
    style({
      'height': `${46 / 16}rem`,
      'width': '100%',
      'border': `1px solid ${theme.color.gray}`,
      'outline': 'none',
      ':focus': {
        boxShadow:
          'rgb(1, 114, 203) 0px 0px 0px 1px inset, rgba(1, 114, 203, 0.15) 0px 0px 0px 3px',
      },
      'selectors': {
        '&[aria-invalid="true"]': {
          borderColor: theme.color.danger,
        },
        '&[aria-invalid="true"]:focus': {
          boxShadow: `${theme.color.dangerActive} 0px 0px 0px 1px inset, ${theme.color.dangerActive} 0px 0px 0px 3px`,
        },
      },
    }),
    atoms({
      paddingX: 'normal',
      fontFamily: 'default',
      borderRadius: 'normal',
      fontSize: 'normal',
    }),
  ),
};
