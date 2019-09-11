// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';

type Props = {|
  +size: 'small' | 'large',
  +testID?: string,
|};

export default function Loader({ size = 'small', testID }: Props) {
  return <ActivityIndicator size={size} testID={testID} />;
}
