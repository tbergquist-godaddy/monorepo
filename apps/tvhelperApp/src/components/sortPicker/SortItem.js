// @flow strict

import * as React from 'react';
import { Text, Touchable, Colors } from '@tbergq/rn-components';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {|
  +label: string,
  +onPress: () => void,
  +isChecked: boolean,
|};

export default function SortItem(props: Props) {
  return (
    <Touchable onPress={props.onPress}>
      <View style={styles.row}>
        <Text>{props.label}</Text>
        <MaterialIcons
          name={props.isChecked ? 'check-box' : 'check-box-outline-blank'}
          size={20}
          color={props.isChecked ? Colors.success : Colors.primary}
        />
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.gray,
    justifyContent: 'space-between',
    marginBottom: -1,
  },
});
