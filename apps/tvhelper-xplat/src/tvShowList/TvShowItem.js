// @flow

import * as React from 'react';
import { Text, Colors, Touchable } from '@tbergq/rn-components';
import {
  graphql,
  createFragmentContainer,
  type RelayProp,
  type RelayEnvironmentType,
} from '@tbergq/relay';
import { Image, View, StyleSheet, Dimensions, Platform } from 'react-native';

import type { TvShowItem_data as TvShow } from './__generated__/TvShowItem_data.graphql';

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +data: ?TvShow,
  +onPress: NavigationOptions => void,
  +relay: RelayProp,
|};

class TvShowItem extends React.Component<Props> {
  onPress = () => {
    this.props.onPress({
      id: this.props.data?.id,
      name: this.props.data?.name,
      environment: this.props.relay.environment,
    });
  };

  render() {
    const status = this.props.data?.status ?? '';
    const name = this.props.data?.name ?? '';
    const rating = this.props.data?.rating ?? '';
    return (
      <Touchable onPress={this.onPress}>
        <View style={styles.container}>
          <Image
            source={{ uri: this.props.data?.image?.medium }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <View style={styles.bottomSheet}>
            <Text style={styles.text}>{`${name} - ${rating}`}</Text>
            <Text style={[styles.text, styles[status.toLowerCase()]]}>{status}</Text>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === 'web' ? 300 : (Dimensions.get('window').width - 30) / 2,
    height: Platform.OS === 'web' ? 300 : 150,
    marginEnd: 5,
    marginBottom: 5,
    backgroundColor: Colors.gray,
  },
  bottomSheet: {
    position: 'absolute',
    start: 0,
    end: 0,
    bottom: 0,
    backgroundColor: Colors.black,
    opacity: 0.7,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  running: {
    color: Colors.success,
  },
  // eslint-disable-next-line react-native/no-unused-styles
  ended: {
    color: Colors.danger,
  },
});

export default createFragmentContainer(TvShowItem, {
  data: graphql`
    fragment TvShowItem_data on TvShow {
      id
      name
      status
      rating
      image {
        medium
      }
    }
  `,
});
