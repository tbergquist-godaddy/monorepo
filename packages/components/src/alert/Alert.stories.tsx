import Alert from './Alert';

export default {
  component: Alert,
  title: 'Alert',
};

const Template = (args) => <Alert {...args} />;

export const success = Template.bind({});
success.args = {
  type: 'success',
  children: 'Success',
};

export const danger = Template.bind({});
danger.args = {
  type: 'danger',
  children: 'Danger',
};
