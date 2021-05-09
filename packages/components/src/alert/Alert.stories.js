// @flow

import type { Node } from 'react';

import Alert from './Alert';

// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
export const success = (): Node => <Alert type="success">Success</Alert>;
// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
export const danger = (): Node => <Alert type="danger">Danger</Alert>;

export default {
  component: Alert,
  title: 'Alert',
};
