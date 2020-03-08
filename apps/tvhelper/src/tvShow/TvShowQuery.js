// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { TvShowQueryResponse } from './__generated__/TvShowQuery.graphql';
import TvShowPage from './TvShowPage';
import Layout from '../components/Layout';

type Props = {|
  +tvShowId: ?string,
|};

export const tvShowQuery = graphql`
  query TvShowQuery($id: ID!) {
    viewer {
      ...Layout_viewer
    }
    tvShowDetail(id: $id) {
      ...TvShowPage_tvShow
    }
  }
`;

function renderQuery(props: TvShowQueryResponse) {
  return (
    <Layout viewer={props.viewer}>
      <TvShowPage tvShow={props.tvShowDetail} />
    </Layout>
  );
}

export default function TvShowQuery(props: Props) {
  if (props.tvShowId == null) {
    return null;
  }
  return (
    <QueryRenderer query={tvShowQuery} variables={{ id: props.tvShowId }} render={renderQuery} />
  );
}
