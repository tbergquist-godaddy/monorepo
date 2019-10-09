// @flow

import * as React from 'react';
import { ScrollView, StyleSheet, View, Platform } from 'react-native';
import { graphql, createFragmentContainer, type RelayEnvironmentType } from '@tbergq/relay';

import type { TvShowList_data as SearchResults } from './__generated__/TvShowList_data.graphql';
import TvShowItem from './TvShowItem';

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +data: ?SearchResults,
  +onPress: NavigationOptions => void,
|};

// This component should be imroved for SSR
function TvShowList(props: Props) {
  const data = props.data?.edges ?? [];
  const [layout, setLayout] = React.useState({ width: 500, imagesPrRow: 2 });
  const onLayout = e => {
    if (e.nativeEvent.layout.width > 500) {
      setLayout({
        width: (e.nativeEvent.layout.width - 28) / 3,
        imagesPrRow: 3,
      });
    } else {
      setLayout({
        width: (e.nativeEvent.layout.width - 28) / 2,
        imagesPrRow: 2,
      });
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardDismissMode="on-drag">
      <View style={styles.innerContainer} onLayout={onLayout}>
        {data.map((tvShow, index) => (
          <React.Fragment key={tvShow?.node?.id}>
            <TvShowItem width={layout.width} data={tvShow?.node} onPress={props.onPress} />
            {index % layout.imagesPrRow < layout.imagesPrRow - 1 ? (
              <View style={styles.separator} />
            ) : null}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  innerContainer: {
    paddingHorizontal: Platform.OS === 'web' ? 0 : 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  separator: {
    marginEnd: 8,
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
