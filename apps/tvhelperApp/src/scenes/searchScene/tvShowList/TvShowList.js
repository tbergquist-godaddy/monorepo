// @flow

import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { graphql, createFragmentContainer } from '@tbergq/relay';

import type { TvShowList_data as SearchResults } from './__generated__/TvShowList_data.graphql';
import TvShowItem from './TvShowItem';

type Props = {|
  +data: ?SearchResults,
|};

class TvShowList extends React.Component<Props> {
  render() {
    const data = this.props.data?.edges ?? [];
    return (
      <ScrollView contentContainerStyle={styles.container} keyboardDismissMode="on-drag">
        {data.map(tvShow => (
          <TvShowItem data={tvShow?.node} key={tvShow?.node?.id} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
});

export default createFragmentContainer(TvShowList, {
  data: graphql`
    fragment TvShowList_data on TvShowConnection {
      edges {
        node {
          id
          ...TvShowItem_data
        }
      }
    }
  `,
});
