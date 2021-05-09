// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
export const primary = (): Node => <Button onClick={action('click')}>primary</Button>;
export const secondary = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Button color="secondary" onClick={action('click')}>
    secondary
  </Button>
);
export const danger = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Button color="danger" onClick={action('click')}>
    danger
  </Button>
);
export const small = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Button size="small" onClick={action('click')}>
    small
  </Button>
);

export const large = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Button size="large" onClick={action('click')}>
    large
  </Button>
);

export const loading = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Button loading={true} onClick={action('click')}>
    primary
  </Button>
);

export const loadingSmall = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Button size="small" loading={true} onClick={action('click')}>
    primary
  </Button>
);

export default {
  component: Button,
  title: 'Button',
};
