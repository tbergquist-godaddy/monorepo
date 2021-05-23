// @flow

import type { Node } from 'react';
import { Button } from '@tbergq/components';

import { useCastAction, useCastState } from '../CastContext';
import CastImage from './cast.png';

const castController = electron.remote.require('./CastController').default;

export default function CastController(): Node {
  const { dispatch } = useCastAction();
  const { castState, movie, subtitle } = useCastState();
  const startCast = async () => {
    try {
      dispatch({ type: 'setCastState', payload: 'loading' });
      const playTime = localStorage.getItem(movie ?? '') ?? 0;
      await castController.startCast({ movie, subtitle, startTime: parseInt(playTime, 10) });
      dispatch({ type: 'setCastState', payload: 'casting' });
    } catch (e) {
      dispatch({ type: 'setCastState', payload: 'error' });
    }
  };
  return (
    <Button loading={castState === 'loading'} onClick={startCast}>
      <img src={CastImage} alt="Cast" />
    </Button>
  );
}
