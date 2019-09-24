// @flow strict

import * as React from 'react';
import { View, StyleSheet, Modal as OriginalModal, TouchableWithoutFeedback } from 'react-native';

import Touchable from '../Touchable';
import Text from '../Text';
import Colors from '../Colors';
// import isXphone from '../isXphone';

type Props = {|
  +isVisible: boolean,
  +children: React.Node | React.ChildrenArray<React.Node>,
  +onClose: () => void,
  +onSave: () => void,
|};

export default function Modal(props: Props) {
  return (
    <OriginalModal
      visible={props.isVisible}
      transparent={true}
      style={styles.modal}
      onRequestClose={props.onClose}
    >
      <View style={[styles.content, styles.flexItem]}>
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View style={styles.flexItem} />
        </TouchableWithoutFeedback>
        <View style={styles.header}>
          <Touchable onPress={props.onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </Touchable>
          <Touchable onPress={props.onSave}>
            <Text style={styles.buttonText}>Save</Text>
          </Touchable>
        </View>
        <View style={styles.children}>{props.children}</View>
      </View>
    </OriginalModal>
  );
}

const styles = StyleSheet.create({
  flexItem: {
    flex: 1,
  },
  content: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonText: {
    color: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    padding: 10,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  modal: {
    marginTop: 22,
  },
  children: {
    padding: 10,
    backgroundColor: Colors.white,
    // paddingBottom: isXphone ? 36 : 10,
  },
});
