import { atoms, theme } from '@tbergq/components';
import { composeStyles, style } from '@vanilla-extract/css';

const hoverFocus = {
  backgroundColor: theme.color.gray,
  outline: 'none',
};

export const classNames = {
  listItem: composeStyles(
    style({
      marginTop: '1px',
      marginBottom: '-1px',
      selectors: {
        '&:hover': hoverFocus,
        '&:focus': hoverFocus,
      },
    }),
    atoms({
      border: 'none',
      background: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: 'increased',
      borderColor: 'gray',
      borderBottomWidth: 'normal',
      borderBottomStyle: 'solid',
      fontSize: 'normal',
      fontFamily: 'default',
      cursor: 'pointer',
    }),
  ),
  description: atoms({
    color: 'secondary',
    fontSize: 'small',
    textAlign: 'left',
  }),
  title: atoms({
    fontWeight: 500,
    textAlign: 'left',
  }),
  textWrapper: atoms({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginRight: 'increased',
  }),
};
