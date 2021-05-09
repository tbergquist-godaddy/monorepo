// @flow

import type { Node } from 'react';

import Loader from './Loading';

export const Loading = (): Node => <Loader />;

export default {
  component: Loader,
  title: 'Loading',
};
