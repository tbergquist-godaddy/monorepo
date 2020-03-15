// @flow

import * as React from 'react';
import { Button } from '@tbergq/components';

const startCast = electron.remote.require('./startCast').default;

export default function CastTest() {
  const test = () => {
    startCast();
  };
  return <Button onClick={test}>Cast test</Button>;
}
