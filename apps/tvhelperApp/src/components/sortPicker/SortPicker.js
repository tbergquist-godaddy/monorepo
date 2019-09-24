// @flow strict

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Modal } from '@tbergq/rn-components';

import SortItem from './SortItem';

type Props = {|
  +setSortOptions: (
    direction: $PropertyType<State, 'direction'>,
    sortBy: $PropertyType<State, 'sortBy'>,
  ) => void,
  +toggleModal: () => void,
  +showModal: boolean,
|};

type State = {|
  direction: 'ASC' | 'DESC',
  sortBy: 'NAME' | 'NEXT_EPISODE' | 'PREVIOUS_EPISODE' | 'STATUS',
|};

export default class SortPicker extends React.Component<Props, State> {
  state = {
    direction: 'ASC',
    sortBy: 'NAME',
  };

  onSave = () => {
    const { direction, sortBy } = this.state;
    this.props.setSortOptions(direction, sortBy);
  };

  setAscending = () => {
    this.setState({ direction: 'ASC' });
  };

  setDescending = () => {
    this.setState({ direction: 'DESC' });
  };

  setName = () => {
    this.setState({ sortBy: 'NAME' });
  };

  setStatus = () => {
    this.setState({ sortBy: 'STATUS' });
  };

  setNextEpisode = () => {
    this.setState({ sortBy: 'NEXT_EPISODE' });
  };

  setPreviousEpisode = () => {
    this.setState({ sortBy: 'PREVIOUS_EPISODE' });
  };

  render() {
    const { showModal, toggleModal } = this.props;
    const { direction, sortBy } = this.state;
    return (
      <Modal isVisible={showModal} onClose={toggleModal} onSave={this.onSave}>
        <View>
          <Text style={styles.heading}>Sort direction</Text>
          <SortItem label="Ascending" isChecked={direction === 'ASC'} onPress={this.setAscending} />
          <SortItem
            label="Descending"
            isChecked={direction === 'DESC'}
            onPress={this.setDescending}
          />
          <Text style={styles.heading}>Sort by</Text>
          <SortItem label="Name" isChecked={sortBy === 'NAME'} onPress={this.setName} />
          <SortItem label="Status" isChecked={sortBy === 'STATUS'} onPress={this.setStatus} />
          <SortItem
            label="Previous episode"
            isChecked={sortBy === 'PREVIOUS_EPISODE'}
            onPress={this.setPreviousEpisode}
          />
          <SortItem
            label="Next episode"
            isChecked={sortBy === 'NEXT_EPISODE'}
            onPress={this.setNextEpisode}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginVertical: 10,
  },
});
