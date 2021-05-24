import { action } from '@storybook/addon-actions';

import SignupForm from './signup-form';

const Template = (args) => <SignupForm {...args} onSubmit={action('submit')} />;

export const Default = Template.bind({});

export default {
  title: 'SignupForm',
  component: SignupForm,
};
