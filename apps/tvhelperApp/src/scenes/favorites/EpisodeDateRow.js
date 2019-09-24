// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@tbergq/rn-components';
import format from 'date-fns/format';

type Props = {|
  +text: string,
  +date: ?(Date | string),
|};

export default function EpisodeDateRow(props: Props) {
  const date = props.date != null ? format(props.date, 'Do MMM YY') : 'Unkown';
  return (
    <View style={styles.row}>
      <Text>{props.text}</Text>
      <Text>{': '}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  date: {
    fontWeight: 'bold',
  },
});
