// @flow

/* eslint-disable react-native/no-unused-styles */
import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Text from '../Text';

type Props = {|
  +onPress: () => void,
  +text: string,
  +type?: 'primary' | 'danger',
  +style?: Object,
  +accessibilityTraits?: 'button',
  +accessibilityComponentType?: 'button',
|};

export default function Button({ type = 'primary', ...props }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[styles.button, styles[type], props.style]}
    >
      <Text style={[buttonTextStyles.text, buttonTextStyles[type]]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  accessibilityTraits: 'button',
  accessibilityComponentType: 'button',
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    padding: 10,
  },
  primary: {
    backgroundColor: 'blue',
  },
  danger: {
    backgroundColor: 'red',
  },
});

const buttonTextStyles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
  primary: {
    color: '#fff',
  },
  danger: {
    color: '#fff',
  },
});
