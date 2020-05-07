// @flow

import * as React from 'react';

import Checkbox from './Checkbox';

export const checkbox = (): React.Node => <Checkbox />;

export const withLabel = (): React.Node => <Checkbox label="Check me" />;

export const checked = (): React.Node => <Checkbox checked={true} label="Check" />;

export default {
  title: 'Checkbox',
  components: Checkbox,
};
