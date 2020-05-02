// @flow

import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Stack from './Stack';

export const stack = (): React.Node => (
  <Stack>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Stack>
);

export const flexStack = (): React.Node => (
  <Stack flex={true}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Stack>
);

export const spaceAfter = (): React.Node => (
  <>
    <Stack spaceAfter="normal" flex={boolean('flex', false)}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Stack>
    <div>after</div>
  </>
);

export default {
  title: 'Stack',
  component: Stack,
  decorators: [withKnobs],
};
