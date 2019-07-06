// @flow

import * as React from 'react';
import { TextInput as OriginalTextInput, StyleSheet } from 'react-native';

import Text from './Text';

type Props = {|
  +onChangeText: (text: string) => void,
  +value: string,
  +placeholder?: string,
  +autoFocus?: boolean,
  +secureTextEntry?: boolean,
  +style?: Object,
  +label?: string,
|};

export default function TextInput({ style, label, ...rest }: Props) {
  return (
    <>
      {label != null && <Text style={styles.label}>{label}</Text>}
      <OriginalTextInput {...rest} style={[styles.input, style]} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
  },
});
