import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

export const classNames = {
  input: composeStyles(
    style({
      opacity: 0,
    }),
    atoms({
      position: 'absolute',
    }),
  ),
  labelWrapper: style({
    lineHeight: 1.3125,
  }),
  styledCheckbox: composeStyles(
    atoms({
      position: 'relative',
      borderRadius: 'normal',
      marginRight: 'small',
      backgroundColor: 'white',
    }),
    style({
      'height': '1rem',
      'width': '1rem',
      'border': `2px solid ${theme.color.secondary}`,
      ':after': {
        content: "''",
        position: 'absolute',
        height: '8px',
        width: '4px',
        top: '1px',
        left: '4px',
        transition: 'opacity 0.3s ease-in',
        opacity: 0,
      },
    }),
  ),
  checked: style({
    ':after': {
      border: `solid ${theme.color.white}`,
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
      opacity: 1,
    },
    'selectors': {
      '&&': {
        border: `2px solid ${theme.color.primary}`,
        backgroundColor: theme.color.primary,
      },
    },
  }),
  label: atoms({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),
};
