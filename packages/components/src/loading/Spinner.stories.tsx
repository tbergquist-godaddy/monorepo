import { select } from '@storybook/addon-knobs';

import Spinner from './Spinner';

const Template = () => <Spinner size={select('size', ['small', 'normal', 'page'], 'normal')} />;

export const Default = Template.bind({});

export default {
  component: Spinner,
  title: 'Spinner',
};
