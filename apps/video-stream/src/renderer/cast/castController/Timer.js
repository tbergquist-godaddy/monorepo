// @flow

import * as React from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components';

import { useCastState } from '../CastContext';

const castController = electron.remote.require('./CastController').default;

const SliderContainer = styled.div({
  marginBottom: '8px',
  '.rc-slider-track': {
    backgroundColor: 'deeppink',
  },
  '.rc-slider-dot-active': {
    borderColor: 'deeppink',
  },
  '.rc-slider-handle': {
    border: 'solid 2px deeppink',
  },
});
const formatTime = (input: number) => {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor((input - hours * 3600) / 60);
  const seconds = Math.floor(input - hours * 3600 - minutes * 60);
  return [hours, minutes, seconds].map(i => i.toString().padStart(2, '0')).join(':');
};
export default function Timer() {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [totalPlayTime, setTotalPlaytime] = React.useState(0);
  const intervalRef = React.useRef(null);
  const { castState } = useCastState();

  const fetchTime = React.useCallback(async () => {
    const time = await castController.getCurrentTime();
    setCurrentTime(time);
  }, []);

  React.useEffect(() => {
    if (intervalRef.current == null && castState === 'casting') {
      intervalRef.current = setInterval(() => {
        fetchTime();
      }, 1000);
    } else if (intervalRef != null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [castState, fetchTime]);

  React.useEffect(() => {
    setTotalPlaytime(castController.getTotalPlayTime());
  }, []);

  const onSliderChange = (value: number) => {
    castController.seek(value);
  };
  return (
    <div>
      <SliderContainer>
        <Slider max={totalPlayTime} dots value={currentTime} onChange={onSliderChange} />
      </SliderContainer>
      {formatTime(currentTime)}
      {' / '}
      {formatTime(totalPlayTime)}
    </div>
  );
}
