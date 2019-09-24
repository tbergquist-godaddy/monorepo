// @flow strict

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

import type { TvShowSceneQueryResponse } from './__generated__/TvShowSceneQuery.graphql';
import TvDetail from './TvDetail';

type Props = {|
  +id: string,
  +setIsFavorite: (?boolean) => void,
|};

export default class TvShowScene extends React.Component<Props> {
  renderInner = (props: TvShowSceneQueryResponse) => {
    return <TvDetail data={props.tvShowDetail} setIsFavorite={this.props.setIsFavorite} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query TvShowSceneQuery($id: ID!) {
            tvShowDetail(id: $id) {
              ...TvDetail_data
            }
          }
        `}
        variables={{ id: this.props.id }}
        render={this.renderInner}
      />
    );
  }
}
