import { style, composeStyles } from '@vanilla-extract/css';
import { atoms, theme } from '@tbergq/components';

const fover = {
  backgroundColor: theme.color.gray,
  opacity: 0.8,
  outline: 'none',
};
const listItem = composeStyles(
  atoms({
    display: 'block',
    padding: 'normal',
  }),
  style({
    'borderBottom': `1px solid ${theme.color.gray}`,
    'marginBottom': '-1px',
    'marginTop': '1px',
    'textDecoration': 'none',
    'color': theme.color.black,
    ':focus': fover,
    ':hover': fover,
  }),
);

const image = composeStyles(
  atoms({
    marginRight: 'large',
  }),
  style({
    objectFit: 'cover',
    borderRadius: '50%',
  }),
);

const label = composeStyles(
  atoms({
    fontSize: 'small',
    color: 'secondary',
  }),
);

export const classNames = {
  listItem,
  image,
  label,
  imageFallback: composeStyles(
    atoms({
      backgroundColor: 'gray',
      borderRadius: 'round',
    }),
    style({
      height: '50px',
      width: '50px',
    }),
  ),
};
