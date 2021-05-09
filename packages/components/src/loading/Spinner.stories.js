// @flow

import type { Node } from 'react';

import Spinner from './Spinner';

export const Page = (): Node => <Spinner />;
export const Normal = (): Node => <Spinner size="normal" />;
export const Small = (): Node => <Spinner size="small" />;

export default {
  component: Spinner,
  title: 'Spinner',
};
