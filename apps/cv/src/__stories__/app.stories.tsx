import App from '../app';
import '../index.css';

export default {
  component: App,
  title: 'CV',
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
