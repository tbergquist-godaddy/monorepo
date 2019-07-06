// @flow

import * as React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

type Props = {|
  +children: React.Node,
  +style?: Object,
|};

export default function Text(props: Props) {
  return <RNText style={[styles.text, props.style]}>{props.children}</RNText>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});
