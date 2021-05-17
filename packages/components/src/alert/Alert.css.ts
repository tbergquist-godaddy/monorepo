import { style, composeStyles } from '@vanilla-extract/css';

import { atoms } from '../sprinkles.css';

const alertSuccess = style({
  color: '#155724',
  backgroundColor: '#d4edda',
  border: '1px solid #c3e6cb',
});
const alertDanger = style({
  backgroundColor: '#f8d7da',
  border: '1px solid #f5c6cb',
  color: '#721c24',
});

const alertStyles = atoms({
  borderRadius: 'normal',
  padding: 'increased',
});

export const classNames = {
  danger: composeStyles(alertStyles, alertDanger),
  success: composeStyles(alertStyles, alertSuccess),
};
