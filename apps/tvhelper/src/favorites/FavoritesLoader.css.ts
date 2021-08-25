import { style } from '@vanilla-extract/css';

export const classNames = {
  loader: style({
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: '6px',
    padding: '8px',
    transform: 'translate(-50%, -50%)',
  }),
};
