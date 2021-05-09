// @flow strict-local

import type { Node } from 'react';

import { useCallback } from 'react';

import FileSelector from '../components/FileSelector';
import { useCastAction } from './CastContext';

export default function FileSelectors(): Node {
  const { dispatch } = useCastAction();
  const onMovieChange = useCallback(
    (movie) => {
      dispatch({ type: 'setMovie', payload: movie });
    },
    [dispatch],
  );
  const onSubtitleChange = useCallback(
    (movie) => {
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
