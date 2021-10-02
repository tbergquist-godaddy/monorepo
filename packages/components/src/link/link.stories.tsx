import { select } from '@storybook/addon-knobs';

import Link from './link';
import { colorKeys } from '../sprinkles.css';

const Template = (props) => (
  <Link
    color={props.enableKnob && select('color', colorKeys, 'primary')}
    {...props}
    href="/lol"
    onClick={(e) => e.preventDefault()}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default link',
};

export const Color = Template.bind({});
Color.args = {
  children: 'Color link',
  enableKnob: true,
};

export default {
  component: Link,
  title: 'Link',
};
