// @flow strict

import * as React from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import { createRefetchContainer, graphql, type RefetchRelayProp } from '@tbergq/relay';

import type { FavoritesList_data as FavoritesListType } from './__generated__/FavoritesList_data.graphql';
import FavoritesItem from './FavoritesItem';

type Props = {|
  +data: FavoritesListType,
  +relay: RefetchRelayProp,
  +options: {|
    +sortDirection: 'ASC' | 'DESC',
    +sortBy: 'NAME' | 'NEXT_EPISODE' | 'PREVIOUS_EPISODE' | 'STATUS',
  |},
|};

type State = {|
  isRefreshing: boolean,
|};

class FavoritesList extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.isRefreshing) {
      this.setState({ isRefreshing: false }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  onRefresh = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        options: this.props.options,
      },
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
      { force: true },
    );
  };

  // $FlowFixMe
  keyExtractor = item => item.node?.id;
  // $FlowFixMe
  renderItem = ({ item }) => {
    return <FavoritesItem data={item.node} />;
  };

  render() {
    const data = this.props.data.favorites?.edges ?? [];
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          style={styles.list}
          refreshControl={
            <RefreshControl onRefresh={this.onRefresh} refreshing={this.state.isRefreshing} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  list: {
    paddingVertical: 10,
  },
});

export default createRefetchContainer(
  FavoritesList,
  {
    data: graphql`
      fragment FavoritesList_data on RootQuery
        @argumentDefinitions(
          first: { type: "Int" }
          options: { type: "SortOptions", defaultValue: { sortDirection: "ASC", sortBy: "NAME" } }
        ) {
        favorites(first: $first, options: $options)
          @connection(key: "FavoritesScene_favorites", filters: []) {
          edges {
            node {
              id
              ...FavoritesItem_data
            }
          }
        }
      }
    `,
  },
  graphql`
    query FavoritesListRefetchQuery($first: Int, $options: SortOptions) {
      ...FavoritesList_data @arguments(first: $first, options: $options)
    }
  `,
);
