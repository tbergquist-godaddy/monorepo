// @flow

import * as React from 'react';

import Spinner from './Spinner';

export const Page = (): React.Node => <Spinner />;
export const Normal = (): React.Node => <Spinner size="normal" />;
export const Small = (): React.Node => <Spinner size="small" />;

export default {
  component: Spinner,
  title: 'Spinner',
};
