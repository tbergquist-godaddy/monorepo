// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';
import { ScrollView, View, StyleSheet, Image } from 'react-native';

import type { TvDetail_data as TvDetailType } from './__generated__/TvDetail_data.graphql';
import Summary from './Summary';
import EpisodeList from './EpisodeList';
import Cast from './Cast';

type Props = {|
  +data: ?TvDetailType,
  +setIsFavorite: (?boolean) => void,
|};

class TvDetail extends React.Component<Props> {
  componentDidMount() {
    const isFavorite = this.props.data?.isFavorite;
    this.props.setIsFavorite(isFavorite);
  }

  render() {
    return (
      <ScrollView>
        <Image
          source={{ uri: this.props.data?.image?.original }}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.container}>
          <Summary data={this.props.data} />
          <View style={styles.episodeContainer}>
            <Cast data={this.props.data} />
          </View>
          <View style={styles.episodeContainer}>
            <EpisodeList data={this.props.data} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  episodeContainer: {
    marginTop: 10,
  },
});

export default createFragmentContainer(TvDetail, {
  data: graphql`
    fragment TvDetail_data on TvShow {
      isFavorite
      image {
        original
      }
      ...Summary_data
      ...EpisodeList_data
      ...Cast_data
    }
  `,
});
