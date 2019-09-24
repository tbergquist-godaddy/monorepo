// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import TvShowList from './tvShowList/TvShowList';
import type { SearchContainerQueryResponse } from './__generated__/SearchContainerQuery.graphql';

type Props = {|
  +query: string,
|};

export default class SearchContainer extends React.Component<Props> {
  renderInner = (props: SearchContainerQueryResponse) => {
    return <TvShowList data={props.searchTvShow} />;
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
