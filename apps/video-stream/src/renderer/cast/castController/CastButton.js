// @flow strict-local

import * as React from 'react';
import { Button } from '@tbergq/components';

import { useCastAction, useCastState } from '../CastContext';
import CastImage from './cast.png';

const castController = electron.remote.require('./CastController').default;

export default function CastController(): React.Node {
  const { dispatch } = useCastAction();
  const { castState, movie, subtitle } = useCastState();
  const startCast = async () => {
    try {
      dispatch({ type: 'setCastState', payload: 'loading' });
      await castController.startCast({ movie, subtitle });
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
