// @flow

import type { Node } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Stack from './Stack';

export const stack = (): Node => (
  <Stack>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Stack>
);

export const flexStack = (): Node => (
  <Stack flex={true}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Stack>
);

export const spaceAfter = (): Node => (
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
