// @flow

import * as React from 'react';
import { Button } from '@kiwicom/orbit-components';
import path from 'path';

const castController = electron.remote.require('./CastController').default;
const dialog = electron.remote.dialog;

type CastState = 'idle' | 'loading' | 'casting' | 'error' | 'paused';

export default function CastTest(): React.Node {
  const [movie, setMovie] = React.useState(null);
  const [subtitle, setSubtitle] = React.useState(null);
  const [castState, setCastState] = React.useState<CastState>('idle');

  const onSelectMovie = () => {
    const files: $ReadOnlyArray<string> | void = dialog.showOpenDialogSync({
      properties: ['openFile'],
      filters: [{ name: 'Movie', extensions: ['mp4', 'mkv'] }],
    });
    if (Array.isArray(files)) {
      setMovie(files[0]);
    }
  };
  const onSelectSubtitle = () => {
    const files: $ReadOnlyArray<string> | void = dialog.showOpenDialogSync({
      properties: ['openFile'],
      filters: [{ name: 'Subs', extensions: ['vtt', 'srt'] }],
    });
    if (Array.isArray(files)) {
      setSubtitle(files[0]);
    }
  };
  const onStartCast = async () => {
    setCastState('loading');
    try {
      await castController.startCast({ movie, subtitle });
      setCastState('casting');
    } catch {
      setCastState('error');
    }
  };
  const stopCast = async () => {
    try {
      await castController.stopCast();
    } finally {
      setCastState('idle');
    }
  };
  return (
    <>
      {movie == null ? (
        <div>No movie selcted</div>
      ) : (
        <div>Movie selcted: {path.basename(movie)}</div>
      )}
      <Button onClick={onSelectMovie}>Select movie</Button>
      {subtitle == null ? (
        <div>No subtitle selctec</div>
      ) : (
        <div>Subtitle selcted: {path.basename(subtitle)}</div>
      )}
      <Button onClick={onSelectSubtitle}>Select subtitle</Button>
      <Button loading={castState === 'loading'} onClick={onStartCast}>
        Start cast
      </Button>
      {(castState === 'casting' || castState === 'paused') && (
        <div style={{ display: 'flex' }}>
          <Button onClick={stopCast}>Stop</Button>
          <Button
            onClick={() => {
              castController.fastForward();
            }}
          >
            Fast Forward
          </Button>
          <Button
            onClick={() => {
              castController.fastRewind();
            }}
          >
            Rewind
          </Button>
          {castState === 'casting' && (
            <Button
              onClick={() => {
                castController.pause();
                setCastState('paused');
              }}
            >
              Pause
            </Button>
          )}
          {castState === 'paused' && (
            <Button
              onClick={() => {
                castController.resume();
                setCastState('casting');
              }}
            >
              Resume
            </Button>
          )}
        </div>
      )}
    </>
  );
}
