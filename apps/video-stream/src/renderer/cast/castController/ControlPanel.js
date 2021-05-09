// @flow strict-local

import type { Node } from 'react';
import { Button, Stack } from '@tbergq/components';
import { MdPlayArrow, MdPause, MdStop, MdFastRewind, MdFastForward } from 'react-icons/md';
// $FlowFixMe[untyped-import] $FlowFixMe(>=<150.1>)
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
      {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
      <Stack flex={true}>
        {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
        <Button onClick={playPause}>
          <IconContainer>
            {castState === 'casting' && <MdPause />}
            {castState === 'paused' && <MdPlayArrow />}
          </IconContainer>
        </Button>
        {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
        <Button onClick={fastRewind}>
          <IconContainer>
            <MdFastRewind />
          </IconContainer>
        </Button>
        {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
        <Button onClick={fastForward}>
          <IconContainer>
            <MdFastForward />
          </IconContainer>
        </Button>
        {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
        <Button onClick={stop}>
          <IconContainer>
            <MdStop />
          </IconContainer>
        </Button>
      </Stack>
    </>
  );
}
