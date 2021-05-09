// @flow

import type { Node } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Stack from './Stack';

export const stack = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Stack>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Stack>
);

export const flexStack = (): Node => (
  // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
  <Stack flex={true}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
  </Stack>
);

export const spaceAfter = (): Node => (
  <>
    {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
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
