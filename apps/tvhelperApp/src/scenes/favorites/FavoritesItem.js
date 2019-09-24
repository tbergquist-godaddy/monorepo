// @flow strict

import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Touchable, Colors } from '@tbergq/rn-components';
import { createFragmentContainer, graphql, type RelayProp } from '@tbergq/relay';
import { withNavigation, type NavigationScreenProp } from 'react-navigation';

import EpisodeDateRow from './EpisodeDateRow';
import type { FavoritesItem_data as FavoritesType } from './__generated__/FavoritesItem_data.graphql';

type Props = {|
  +data: ?FavoritesType,
  +navigation: NavigationScreenProp<{||}>,
  +relay: RelayProp,
|};

class FavoritesItem extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate('TvShow', {
      id: this.props.data?.id,
      name: this.props.data?.name,
      environment: this.props.relay.environment,
    });
  };

  render() {
    const { data } = this.props;
    const name = data?.name ?? '';
    const status = data?.status ?? '';

    return (
      <Touchable onPress={this.onPress} delayPressIn={70}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: this.props.data?.image?.medium }} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text>{`${name} - ${status}`}</Text>
            <EpisodeDateRow text="Next episode" date={data?.nextEpisode} />
            <EpisodeDateRow text="Previous episode" date={data?.previousEpisode} />
          </View>
        </View>
        <View style={styles.separator} />
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  imageWrapper: {
    backgroundColor: Colors.gray,
  },
  image: {
    height: 80,
    width: 80,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginBottom: 8,
    marginStart: 85,
  },
  content: {
    marginStart: 10,
    alignSelf: 'center',
  },
});

// $FlowFixMe
export default createFragmentContainer(withNavigation(FavoritesItem), {
  data: graphql`
    fragment FavoritesItem_data on TvShow {
      id
      name
      image {
        medium
      }
      previousEpisode
      nextEpisode
      status
    }
  `,
});
