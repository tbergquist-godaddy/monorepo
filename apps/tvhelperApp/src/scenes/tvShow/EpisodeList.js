// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Text, Touchable, Colors } from '@tbergq/rn-components';
import { StyleSheet, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import type { EpisodeList_data as EpisodeListType } from './__generated__/EpisodeList_data.graphql';
import EpisodeItem from './EpisodeItem';

type Props = {|
  +data: ?EpisodeListType,
|};

type State = {|
  showEpisodes: boolean,
|};

class EpisodeList extends React.Component<Props, State> {
  iconAnimation: Animated.Value;
  constructor(props: Props) {
    super(props);

    this.state = {
      showEpisodes: true,
    };

    this.iconAnimation = new Animated.Value(0);
  }

  toggleEpisodes = () => {
    setTimeout(() => {
      this.setState(
        state => ({
          showEpisodes: !state.showEpisodes,
        }),
        this.animate,
      );
    });
  };

  animate = () => {
    Animated.timing(this.iconAnimation, {
      toValue: this.state.showEpisodes ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const data = this.props.data?.episodes ?? [];
    const transformation = this.iconAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    return (
      <>
        <Touchable
          onPress={this.toggleEpisodes}
          style={[styles.expandButton, this.state.showEpisodes && styles.expanded]}
        >
          <Text>Episodes</Text>
          <Animated.View style={{ transform: [{ rotate: transformation }] }}>
            <MaterialIcons name={'expand-less'} size={20} color={Colors.primary} />
          </Animated.View>
        </Touchable>
        {this.state.showEpisodes &&
          data.map(episode => {
            return <EpisodeItem key={episode?.id} data={episode} />;
          })}
      </>
    );
  }
}

const styles = StyleSheet.create({
  expandButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  expanded: {
    marginBottom: -1,
  },
});

export default createFragmentContainer(EpisodeList, {
  data: graphql`
    fragment EpisodeList_data on TvShow {
      episodes {
        id
        ...EpisodeItem_data
      }
    }
  `,
});
