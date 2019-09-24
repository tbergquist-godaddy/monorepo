// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Text, Colors, Touchable } from '@tbergq/rn-components';
import { View, StyleSheet } from 'react-native';
import { withNavigation, type NavigationScreenProp } from 'react-navigation';

import type { EpisodeItem_data as EpisodeItemType } from './__generated__/EpisodeItem_data.graphql';

type Props = {|
  +data: ?EpisodeItemType,
  +navigation: NavigationScreenProp<{||}>,
|};

class EpisodeItem extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate('Episode', {
      id: this.props.data?.id,
      seasonAndNumber: this.props.data?.seasonAndNumber,
    });
  };

  render() {
    const airdate = this.props.data?.airdate ?? 'Unknown';
    return (
      <Touchable onPress={this.onPress} delayPressIn={70}>
        <View style={[styles.row, this.props.data?.watched === true && styles.watched]}>
          <Text>{this.props.data?.seasonAndNumber ?? ''}</Text>
          <Text>{this.props.data?.name ?? ''}</Text>
          <Text>{airdate}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 10,
    marginBottom: -1,
  },
  watched: {
    backgroundColor: Colors.success,
  },
});
// $FlowFixMe
export default createFragmentContainer(withNavigation(EpisodeItem), {
  data: graphql`
    fragment EpisodeItem_data on Episode {
      id
      seasonAndNumber
      name
      airdate
      watched
    }
  `,
});
