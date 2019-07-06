// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';

import Touchable from './Touchable';
import Text from '../Text';

type Props = {|
  +children: string,
  +onPress: () => void | (() => Promise<void>),
|};

export default function HeaderButton(props: Props) {
  return (
    <Touchable onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
