// @flow strict-local

import * as React from 'react';

import FileSelector from '../components/FileSelector';
import { useCastAction } from './CastContext';

export default function FileSelectors(): React.Node {
  const { dispatch } = useCastAction();
  const onMovieChange = React.useCallback(
    movie => {
      dispatch({ type: 'setMovie', payload: movie });
    },
    [dispatch],
  );
  const onSubtitleChange = React.useCallback(
    movie => {
      dispatch({ type: 'setSubtitle', payload: movie });
    },
    [dispatch],
  );
  return (
    <>
      <FileSelector
        onSelect={onMovieChange}
        name="Movie"
        buttonText="Select movie"
        extensions={['mp4', 'mkv']}
      />
      <FileSelector
        onSelect={onSubtitleChange}
        name="Subtitle"
        buttonText="Select subtitle"
        extensions={['vtt', 'srt']}
      />
    </>
  );
}
