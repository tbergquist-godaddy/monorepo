// @flow strict-local

import * as React from 'react';
import { Button, Stack } from '@tbergq/components';
import { MdPlayArrow, MdPause, MdStop, MdFastRewind, MdFastForward } from 'react-icons/md';
import styled from 'styled-components';

import { useCastState, useCastAction } from '../CastContext';

const IconContainer = styled.span({
  svg: {
    paddingTop: '4px',
  },
});

const castController = electron.remote.require('./CastController').default;

export default function ControlPanel() {
  const { castState } = useCastState();
  const { dispatch } = useCastAction();
  const pause = () => {
    dispatch({ type: 'setCastState', payload: 'paused' });
    castController.pause();
  };
  const play = () => {
    dispatch({ type: 'setCastState', payload: 'casting' });
    castController.resume();
  };
  const playPause = () => {
    if (castState === 'casting') {
      pause();
    } else {
      play();
    }
  };
  const fastForward = () => {
    castController.fastForward();
  };
  const fastRewind = () => {
    castController.fastRewind();
  };
  const stop = () => {
    castController.stopCast();
  };
  return (
    <Stack flex={true} spacing="condensed">
      <Button onClick={playPause}>
        <IconContainer>
          {castState === 'casting' && <MdPause />}
          {castState === 'paused' && <MdPlayArrow />}
        </IconContainer>
      </Button>
      <Button onClick={fastRewind}>
        <IconContainer>
          <MdFastRewind />
        </IconContainer>
      </Button>
      <Button onClick={fastForward}>
        <IconContainer>
          <MdFastForward />
        </IconContainer>
      </Button>
      <Button onClick={stop}>
        <IconContainer>
          <MdStop />
        </IconContainer>
      </Button>
    </Stack>
  );
}
