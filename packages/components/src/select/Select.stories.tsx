import { action } from '@storybook/addon-actions';

import Select from './Select';

const options = [
  { value: '1', label: 'JavaScript' },
  { value: '2', label: 'Perl' },
  { value: '3', label: 'Ruby' },
];

const Template = (args) => (
  <Select label="Language" onChange={action('change')} {...args} options={options} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'select',
};

export const withPlaceHolder = Template.bind({});
withPlaceHolder.args = {
  name: 'select',
  placeholder: '--select--',
};

export const withError = Template.bind({});
withError.args = {
  name: 'select',
  placeholder: '--select--',
  error: 'Select is a required field',
};

export default {
  title: 'Select',
  component: Select,
};
