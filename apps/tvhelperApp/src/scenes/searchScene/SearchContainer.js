// @flow

import * as React from 'react';
import { graphql, QueryRenderer, type RelayEnvironmentType } from '@tbergq/relay';
import { TvShowList } from '@tbergq/tvhelper-xplat';
import { withNavigation, type NavigationScreenProp } from 'react-navigation';

import type { SearchContainerQueryResponse } from './__generated__/SearchContainerQuery.graphql';

type NavigationOptions = {|
  +id: ?string,
  +name: ?string,
  +environment: RelayEnvironmentType,
|};

type Props = {|
  +query: string,
  +navigation: NavigationScreenProp<{||}>,
|};

class SearchContainer extends React.Component<Props> {
  onPress = ({ id, name, environment }: NavigationOptions) => {
    this.props.navigation.navigate('TvShow', {
      id,
      name,
      environment,
    });
  };

  renderInner = (props: SearchContainerQueryResponse) => {
    return <TvShowList data={props.searchTvShow} onPress={this.onPress} />;
  };

  render() {
    const { query } = this.props;
    return (
      <QueryRenderer
        query={graphql`
          query SearchContainerQuery($query: String!) {
            searchTvShow(query: $query) {
              ...TvShowList_data
            }
          }
        `}
        variables={{ query }}
        render={this.renderInner}
      />
    );
  }
}

// $FlowFixMe: I have no idea what this flow type want 😞
export default withNavigation(SearchContainer);
