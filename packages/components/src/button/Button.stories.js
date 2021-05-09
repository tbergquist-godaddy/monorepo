// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const primary = (): Node => <Button onClick={action('click')}>primary</Button>;
export const secondary = (): Node => (
  <Button color="secondary" onClick={action('click')}>
    secondary
  </Button>
);
export const danger = (): Node => (
  <Button color="danger" onClick={action('click')}>
    danger
  </Button>
);
export const small = (): Node => (
  <Button size="small" onClick={action('click')}>
    small
  </Button>
);

export const large = (): Node => (
  <Button size="large" onClick={action('click')}>
    large
  </Button>
);

export const loading = (): Node => (
  <Button loading={true} onClick={action('click')}>
    primary
  </Button>
);

export const loadingSmall = (): Node => (
  <Button size="small" loading={true} onClick={action('click')}>
    primary
  </Button>
);

export default {
  component: Button,
  title: 'Button',
};
