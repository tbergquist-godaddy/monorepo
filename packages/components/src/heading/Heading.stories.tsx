import { withKnobs, select, text } from '@storybook/addon-knobs';

import Heading from './Heading';

export const Default = () => (
  <Heading level={select('level', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1')}>
    {text('Text', 'Heading')}
  </Heading>
);

export default {
  component: Heading,
  title: 'Heading',
  decorators: [withKnobs],
};
