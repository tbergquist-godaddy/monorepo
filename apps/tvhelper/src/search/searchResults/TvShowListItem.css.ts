import { atoms } from '@tbergq/components';
import { style, composeStyles } from '@vanilla-extract/css';

const hoverFocus = {
  transform: ' scale(1.05)',
  transition: 'all 0.2s ease-in',
};
export const classNames = {
  link: style({
    'outline': 'none',
    ':hover': hoverFocus,
    ':focus': hoverFocus,
  }),
  container: atoms({
    height: '100%',
    position: 'relative',
    marginBottom: 'normal',
    backgroundColor: 'gray.100',
    borderRadius: 'normal',
    backgroundSize: 'cover',
  }),
  bottomSheet: composeStyles(
    style({
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      minHeight: '50px',
    }),
    atoms({
      position: 'absolute',
      borderBottomLeftRadius: 'normal',
      borderBottomRightRadius: 'normal',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }),
  ),
  image: atoms({
    borderRadius: 'normal',
    objectFit: 'cover',
  }),
  text: atoms({
    paddingTop: 'tiny',
    color: 'white',
    fontSize: 'normal',
  }),
};
