// @flow

import type { Node } from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import Heading from './Heading';

export const h1 = (): Node => (
  <Heading level={select('level', ['h1', 'h2', 'h3', 'h4', 'h5'])}>
    {text('Text', 'Heading')}
  </Heading>
);

export default {
  component: Heading,
  title: 'Heading',
  decorators: [withKnobs],
};
