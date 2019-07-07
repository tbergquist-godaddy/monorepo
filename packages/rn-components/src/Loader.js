// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';

type Props = {|
  +size: 'small' | 'large',
|};

export default function Loader({ size = 'small' }: Props) {
  return <ActivityIndicator size={size} />;
}
