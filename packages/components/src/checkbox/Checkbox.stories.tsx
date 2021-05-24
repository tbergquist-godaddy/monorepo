import Checkbox from './Checkbox';

const Template = (args) => <Checkbox {...args} />;

export const checkbox = Template.bind({});

export const withLabel = Template.bind({});
withLabel.args = {
  label: 'Check me',
};

export const checked = Template.bind({});
checked.args = {
  label: 'Check',
  checked: true,
};

export default {
  title: 'Checkbox',
  components: Checkbox,
};
