// @flow

import * as React from 'react';
import { Text, Colors } from '@tbergq/rn-components';
import {
  graphql,
  createFragmentContainer,
  type RelayProp,
  type RelayEnvironmentType,
} from '@tbergq/relay';
import { Image, View, StyleSheet, Platform } from 'react-native';

import type { TvShowItem_data as TvShow } from './__generated__/TvShowItem_data.graphql';
import TvShowButton from './TvShowButton';

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +data: ?TvShow,
  +onPress: NavigationOptions => void,
  +relay: RelayProp,
  +width: number,
|};

function TvShowItem(props: Props) {
  const status = props.data?.status ?? '';
  const name = props.data?.name ?? '';
  const rating = props.data?.rating ?? '';

  const onPress = () => {
    props.onPress({
      id: props.data?.id,
      name,
      environment: props.relay.environment,
    });
  };

  return (
    <TvShowButton onPress={onPress}>
      <View style={[styles.container, { width: props.width }]}>
        <Image
          source={{ uri: props.data?.image?.medium }}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
        />
        <View style={styles.bottomSheet}>
          <Text style={styles.text}>{`${name} - ${rating}`}</Text>
          <Text style={[styles.text, styles[status.toLowerCase()]]}>{status}</Text>
        </View>
      </View>
    </TvShowButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'web' ? 300 : 150,
    marginBottom: 8,
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
