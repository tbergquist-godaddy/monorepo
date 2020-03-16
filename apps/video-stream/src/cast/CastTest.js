// @flow

import * as React from 'react';
import { Button } from '@tbergq/components';

const startCast = electron.remote.require('./startCast').default;
const castPath = '/Users/trondbergquist/Movies/SampleVideo_1280x720_5mb.mp4';
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
    startCast(encodeURIComponent(castPath));
  };
  return (
    <>
      <div>electron server says: {server}</div>
      <Button onClick={test}>Cast test</Button>
    </>
  );
}
