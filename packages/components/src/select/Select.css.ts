import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

export const classNames = {
  label: atoms({ display: 'block' }),
  select: composeStyles(
    atoms({
      cursor: 'pointer',
      paddingLeft: 'normal',
      borderRadius: 'normal',
      fontFamily: 'default',
      fontSize: 'normal',
      color: 'black',
      outline: 'none',
    }),
    style({
      'height': `${46 / 16}rem`,
      'paddingRight': '40px',
      'width': '100%',
      'appearance': 'none',
      'border': `1px solid ${theme.color.gray}`,
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
  ),
  icon: composeStyles(
    atoms({
      position: 'absolute',
    }),
    style({
      height: '20px',
      width: '20px',
      top: '15px',
      right: '10px',
    }),
  ),
  wrapper: atoms({ position: 'relative' }),
};
