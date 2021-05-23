import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import InputField, { Props } from './InputField';

const Template = ({ value, ...rest }: Props) => (
  <InputField {...rest} value={text('value', value as string)} onChange={action('change')} />
);
export const withValue = Template.bind({});
withValue.args = {
  name: 'phrase',
  label: 'Top phrase',
  value: 'lol',
};

export const withPlaceholder = Template.bind({});
withPlaceholder.args = {
  name: 'ph',
  label: 'With placeholder',
  placeholder: 'Test placeholder',
};

export const withError = Template.bind({});
withError.args = {
  name: 'test',
  label: 'Test',
  placeholder: 'Error',
  error: 'Test is a required field',
};

export default {
  component: InputField,
  title: 'Input',
};
