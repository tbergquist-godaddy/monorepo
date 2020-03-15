// @flow

import * as React from 'react';
import { Button } from '@tbergq/components';

export default function CastTest() {
  const test = () => {
    const startCast = electron.remote.require('./main/startCast');
    startCast();
  };
  return <Button onClick={test}>Cast test</Button>;
}
