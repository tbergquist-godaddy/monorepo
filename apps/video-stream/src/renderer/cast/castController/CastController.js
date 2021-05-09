// @flow strict-local

import type { Node } from 'react';

import { useCastState } from '../CastContext';
import CastButton from './CastButton';
import ControlPanel from './ControlPanel';

const showControlPanelState = ['casting', 'paused'];
const showCastButtonState = ['readyToCast', 'loading'];
export default function CastController(): Node {
  const { castState } = useCastState();

  if (showCastButtonState.includes(castState)) {
    return <CastButton />;
  } else if (showControlPanelState.includes(castState)) {
    return <ControlPanel />;
  }
  return null;
}
