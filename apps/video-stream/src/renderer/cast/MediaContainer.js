// @flow strict-local

import * as React from 'react';
import { Stack } from '@tbergq/components';

import CastController from './castController/CastController';
import FileSelectors from './FileSelectors';

export default function MediaContainer() {
  return (
    <Stack>
      <FileSelectors />
      <CastController />
    </Stack>
  );
}
