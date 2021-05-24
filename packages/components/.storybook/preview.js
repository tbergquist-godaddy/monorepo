import { withKnobs } from '@storybook/addon-knobs';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const decorators = [withKnobs];

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
