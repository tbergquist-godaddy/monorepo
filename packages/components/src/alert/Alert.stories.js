// @flow

import type { Node } from 'react';

import Alert from './Alert';

export const success = (): Node => <Alert type="success">Success</Alert>;
export const danger = (): Node => <Alert type="danger">Danger</Alert>;

export default {
  component: Alert,
  title: 'Alert',
};
