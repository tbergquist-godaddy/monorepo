// @flow strict-local

import type { Node } from 'react';
import { Button, Stack } from '@tbergq/components';
import { MdPlayArrow, MdPause, MdStop, MdFastRewind, MdFastForward } from 'react-icons/md';
import styled from 'styled-components';

import { useCastState, useCastAction } from '../CastContext';
import Timer from './Timer';

const IconContainer = styled.span({
  svg: {
    paddingTop: '4px',
  },
});

const castController = electron.remote.require('./CastController').default;

export default function ControlPanel(): Node {
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
    dispatch({ type: 'setCastState', payload: 'readyToCast' });
  };
  return (
    <>
      <Timer />
      <Stack flex={true}>
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
    </>
  );
}
