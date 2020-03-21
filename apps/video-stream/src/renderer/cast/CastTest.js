// @flow

import * as React from 'react';
import path from 'path';

const startCast = electron.remote.require('./startCast').default;
const dialog = electron.remote.dialog;

const Button = ({ onClick, children }: { +onClick: () => void, +children: React.Node }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default function CastTest() {
  const [movie, setMovie] = React.useState(null);
  const [subtitle, setSubtitle] = React.useState(null);

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
  const onStartCast = () => {
    startCast({ movie, subtitle });
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
      <Button onClick={onStartCast}>Start cast</Button>
    </>
  );
}
