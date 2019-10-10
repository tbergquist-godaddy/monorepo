// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { TvShowQueryResponse } from './__generated__/TvShowQuery.graphql';
import TvShowPage from './TvShowPage';

type Props = {|
  +tvShowId: ?string,
|};

export const tvShowQuery = graphql`
  query TvShowQuery($id: ID!) {
    tvShowDetail(id: $id) {
      ...TvShowPage_tvShow
    }
  }
`;

function renderQuery(props: TvShowQueryResponse) {
  return <TvShowPage tvShow={props.tvShowDetail} />;
}

export default function TvShowQuery(props: Props) {
  if (!props.tvShowId) {
    return null;
  }
  return (
    <QueryRenderer query={tvShowQuery} variables={{ id: props.tvShowId }} render={renderQuery} />
  );
}
