// @flow strict-local

import * as React from 'react';
import { Stack } from '@tbergq/components';

import FileSelector from '../components/FileSelector';
import { useCastAction } from './CastContext';

export default function MediaContainer() {
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
    <Stack>
      <FileSelector
        onSelect={onMovieChange}
        name="Movie"
        buttonText="Select movie"
        extensions={['mp4', 'mkv']}
      />
      <FileSelector
        onSelect={onSubtitleChange}
        name="Subtitle"
        buttonText="Select movie"
        extensions={['vtt', 'srt']}
      />
    </Stack>
  );
}
