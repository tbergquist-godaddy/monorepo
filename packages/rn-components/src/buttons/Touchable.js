// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';

type Props = {|
  +children: React.Node,
  +onPress: () => void | (() => Promise<void>),
  +disabled?: boolean,
  +style?: Object,
  +onLongPress?: () => void | (() => Promise<void>),
  +delayPressIn?: number,
|};

/**
 * Touchable renders a touchable that looks native on both iOS and Android.
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity. On iOS you can pass the props of TouchableOpacity, on
 * Android pass the props of TouchableNativeFeedback.
 */
export default function Touchable({ children, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} {...rest}>
      {children}
    </TouchableOpacity>
  );
}
