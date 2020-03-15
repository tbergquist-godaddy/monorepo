// @flow

import * as React from 'react';
import { Button } from '@tbergq/components';

const startCast = electron.remote.require('./startCast').default;

export default function CastTest() {
  const [server, setServer] = React.useState('');
  React.useEffect(() => {
    fetch('http://localhost:5005')
      .then(res => res.json())
      .then(json => {
        setServer(JSON.stringify(json));
      });
  }, []);
  const test = () => {
    startCast();
  };
  return (
    <>
      <div>electron server says: {server}</div>
      <Button onClick={test}>Cast test</Button>
    </>
  );
}
