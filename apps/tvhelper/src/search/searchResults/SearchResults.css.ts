import { atoms } from '@tbergq/components';
import { composeStyles, style } from '@vanilla-extract/css';

export const classNames = {
  gridContainer: composeStyles(
    atoms({
      display: 'grid',
      gap: 'increased',
    }),
    style({
      'gridTemplateColumns': 'repeat(auto-fill, minmax(150px, 1fr))',
      'gridAutoRows': '250px',
      '@media': {
        'screen and (min-width: 576px)': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gridAutoRows: '250px',
        },
        'screen and (min-width: 768px)': {
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gridAutoRows: '280px',
        },
      },
    }),
  ),
};
