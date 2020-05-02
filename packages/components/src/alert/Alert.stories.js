// @flow

import * as React from 'react';

import Alert from './Alert';

export const success = (): React.Node => <Alert type="success">Success</Alert>;
export const danger = (): React.Node => <Alert type="danger">Danger</Alert>;

export default {
  component: Alert,
  title: 'Alert',
};
