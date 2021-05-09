// @flow

import type { Node } from 'react';

import Spinner from './Spinner';

// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
export const Page = (): Node => <Spinner />;
// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
export const Normal = (): Node => <Spinner size="normal" />;
// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
export const Small = (): Node => <Spinner size="small" />;

export default {
  component: Spinner,
  title: 'Spinner',
};
