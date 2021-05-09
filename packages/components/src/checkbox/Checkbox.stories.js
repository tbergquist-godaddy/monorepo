// @flow

import type { Node } from 'react';

import Checkbox from './Checkbox';

export const checkbox = (): Node => <Checkbox />;

export const withLabel = (): Node => <Checkbox label="Check me" />;

export const checked = (): Node => <Checkbox checked={true} label="Check" />;

export default {
  title: 'Checkbox',
  components: Checkbox,
};
