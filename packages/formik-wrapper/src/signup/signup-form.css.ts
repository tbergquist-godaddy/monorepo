import { style } from '@vanilla-extract/css';

export const classNames = {
  button: style({
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  formGroup: style({
    marginBottom: '8px',
  }),
};
