// @flow

import * as React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const primary = (): React.Node => <Button onClick={action('click')}>primary</Button>;
export const secondary = (): React.Node => (
  <Button color="secondary" onClick={action('click')}>
    secondary
  </Button>
);
export const danger = (): React.Node => (
  <Button color="danger" onClick={action('click')}>
    danger
  </Button>
);
export const small = (): React.Node => (
  <Button size="small" onClick={action('click')}>
    small
  </Button>
);

export const large = (): React.Node => (
  <Button size="large" onClick={action('click')}>
    large
  </Button>
);

export const loading = (): React.Node => (
  <Button loading={true} onClick={action('click')}>
    primary
  </Button>
);

export default {
  component: Button,
  title: 'Button',
};
