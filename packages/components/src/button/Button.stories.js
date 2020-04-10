// @flow

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const info = (): React.Node => <Button onClick={action('click')}>info</Button>;
export const primary = (): React.Node => (
  <Button type="primary" onClick={action('click')}>
    primary
  </Button>
);
export const critical = (): React.Node => (
  <Button type="critical" onClick={action('click')}>
    critical
  </Button>
);
export const secondary = (): React.Node => (
  <Button type="secondary" onClick={action('click')}>
    secondary
  </Button>
);
export const warning = (): React.Node => (
  <Button type="warning" onClick={action('click')}>
    warning
  </Button>
);
export const loading = (): React.Node => (
  <Button loading={true} onClick={action('click')}>
    warning
  </Button>
);

export default {
  component: Button,
  title: 'Button',
};
