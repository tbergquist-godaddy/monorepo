import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

export const classNames = {
  nav: composeStyles(
    atoms({
      position: 'fixed',
      zIndex: 'onTop',
      color: 'white',
    }),
    style({
      backgroundColor: '#222',
      borderColor: '#090909',
      top: 0,
      left: 0,
      right: 0,
    }),
  ),
  navContainer: atoms({ display: 'flex' }),
  contentPadding: composeStyles(
    atoms({
      paddingY: 'normal',
      flex: 1,
    }),
  ),
  flexContainer: atoms({
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  }),
  headerLeftContainer: atoms({
    display: 'flex',
    alignItems: 'center',
  }),
  brand: composeStyles(
    atoms({
      fontSize: 'large',
      color: 'white',
      marginRight: 'large',
    }),
    style({
      textDecoration: 'none',
    }),
  ),
  headerContainer: composeStyles(
    atoms({ display: 'flex' }),
    style({
      selectors: {
        '&*': {
          marginRight: '8px',
        },
      },
    }),
  ),
  burgerButton: composeStyles(
    atoms({
      paddingX: 'normal',
    }),
    style({
      'maxHeight': `${20 / 16}rem`,
      'border': 'none',
      'backgroundColor': '#222',
      ':hover': {
        backgroundColor: '#222',
      },
      ':active': {
        opacity: 0.7,
      },
    }),
  ),
  separator: composeStyles(
    atoms({
      display: 'block',
      paddingY: 'small',
    }),
    style({
      selectors: {
        '&:not(:last-of-type)': {
          borderBottom: `1px solid ${theme.color.secondary}`,
        },
      },
    }),
  ),
  icon: atoms({
    color: 'white',
    cursor: 'pointer',
  }),
  expandMenu: composeStyles(
    atoms({
      position: 'absolute',
    }),
    style({
      top: '45px',
      left: 0,
      backgroundColor: '#222',
      width: '100%',
      transition: 'max-height .3s',
    }),
  ),
  smallMenuContainer: atoms({
    paddingBottom: 'normal',
  }),
};
