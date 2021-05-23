// @flow

import type { Element } from 'react';
import { Stack } from '@tbergq/components';

import CastController from './castController/CastController';
import FileSelectors from './FileSelectors';

export default function MediaContainer(): Element<typeof Stack> {
  return (
    <Stack>
      <FileSelectors />
      <CastController />
    </Stack>
  );
}
