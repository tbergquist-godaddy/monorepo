import { style } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';
import { theme } from '../theme.css';

export const classNames = {
  nav: style([
    atoms({
      position: 'fixed',
      zIndex: 'onTop',
      color: 'white',
    }),
    {
      backgroundColor: '#222',
      borderColor: '#090909',
      top: 0,
      left: 0,
      right: 0,
    },
  ]),
  navContainer: atoms({ display: 'flex' }),
  contentPadding: atoms({
    paddingY: 'normal',
    flex: 1,
  }),
  flexContainer: atoms({
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  }),
  headerLeftContainer: atoms({
    display: 'flex',
    alignItems: 'center',
  }),
  brand: style([
    atoms({
      fontSize: 'large',
      color: 'white',
      marginRight: 'large',
    }),
    {
      textDecoration: 'none',
    },
  ]),
  headerContainer: style([
    atoms({ display: 'flex' }),
    {
      selectors: {
        '&*': {
          marginRight: '8px',
        },
      },
    },
  ]),
  burgerButton: style([
    atoms({
      paddingX: 'normal',
    }),
    {
      'maxHeight': `${20 / 16}rem`,
      'border': 'none',
      'backgroundColor': '#222',
      ':hover': {
        backgroundColor: '#222',
      },
      ':active': {
        opacity: 0.7,
      },
    },
  ]),
  separator: style([
    atoms({
      display: 'block',
      paddingY: 'small',
    }),
    {
      selectors: {
        '&:not(:last-of-type)': {
          borderBottom: `1px solid ${theme.color.secondary}`,
        },
      },
    },
  ]),
  icon: atoms({
    color: 'white',
    cursor: 'pointer',
  }),
  expandMenu: style([
    atoms({
      position: 'absolute',
    }),
    {
      top: '45px',
      left: 0,
      backgroundColor: '#222',
      width: '100%',
      transition: 'max-height .3s',
    },
  ]),
  smallMenuContainer: atoms({
    paddingBottom: 'normal',
  }),
  clickCapture: style({
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  }),
};
