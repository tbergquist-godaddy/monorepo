import { action } from '@storybook/addon-actions';

import Button from './Button';

const Template = (args) => <Button {...args} onClick={action('click')} />;
export const primary = Template.bind({});
primary.args = {
  children: 'primary',
};
export const secondary = Template.bind({});
secondary.args = {
  color: 'secondary',
  children: 'secondary',
};

export const danger = Template.bind({});
danger.args = {
  color: 'danger',
  children: 'danger',
};

export const small = Template.bind({});
small.args = {
  size: 'small',
  children: 'small',
};

export const large = Template.bind({});
large.args = {
  size: 'large',
  children: 'large',
};

export const loading = Template.bind({});
loading.args = {
  loading: true,
  children: 'loading',
};

export const loadingSmall = Template.bind({});
loadingSmall.args = {
  loading: true,
  children: 'loading',
  size: 'small',
};

export default {
  component: Button,
  title: 'Button',
};
