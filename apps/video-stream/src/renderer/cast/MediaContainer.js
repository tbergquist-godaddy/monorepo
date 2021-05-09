// @flow strict-local

import type { Element } from 'react';
import { Stack } from '@tbergq/components';

import CastController from './castController/CastController';
import FileSelectors from './FileSelectors';

// $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
// $FlowFixMe[incompatible-type] $FlowFixMe(>=<150.1>)
export default function MediaContainer(): Element<typeof Stack> {
  return (
    // $FlowFixMe[incompatible-return] $FlowFixMe(>=<150.1>)
    <Stack>
      <FileSelectors />
      <CastController />
    </Stack>
  );
}
