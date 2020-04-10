// @flow

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { MdFavorite, MdPlayArrow, MdAccessAlarm } from 'react-icons/md';

import IconButton from './IconButton';

export const normal = (): React.Node => (
  <IconButton ariaLabel="favorite" onClick={action('click')}>
    <MdFavorite />
  </IconButton>
);

export const small = (): React.Node => (
  <IconButton ariaLabel="play" size="small" color="danger" onClick={action('click')}>
    <MdPlayArrow />
  </IconButton>
);

export const large = (): React.Node => (
  <IconButton ariaLabel="clock" size="large" color="secondary" onClick={action('click')}>
    <MdAccessAlarm />
  </IconButton>
);

export default {
  component: IconButton,
  title: 'IconButton',
};
