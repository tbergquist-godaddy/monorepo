import { atoms } from '@tbergq/components';
import { style } from '@vanilla-extract/css';

export const classNames = {
  listItem: style([
    {
      marginTop: '1px',
      marginBottom: '-1px',
    },
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
    }),
  ]),
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
