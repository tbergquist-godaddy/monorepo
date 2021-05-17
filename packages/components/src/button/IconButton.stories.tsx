import { action } from '@storybook/addon-actions';
import { MdFavorite, MdPlayArrow, MdAccessAlarm } from 'react-icons/md';

import IconButton from './IconButton';

const Template = (args) => <IconButton {...args} onClick={action('click')} />;

export const normal = Template.bind({});
normal.args = {
  children: <MdFavorite />,
  ariaLabel: 'favorite',
};

export const small = Template.bind({});
small.args = {
  ariaLabel: 'play',
  size: 'small',
  color: 'danger',
  children: <MdPlayArrow />,
};

export const large = Template.bind({});
large.args = {
  children: <MdAccessAlarm />,
  ariaLabel: 'clock',
  size: 'large',
  color: 'secondary',
};

export const loading = Template.bind({});
loading.args = {
  children: <MdFavorite />,
  ariaLabel: 'favorite',
  loading: true,
};

export default {
  component: IconButton,
  title: 'IconButton',
};
