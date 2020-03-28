// @flow

import * as React from 'react';

import SearchQuery, { searchQuery } from '../src/search/SearchQuery';

type Props = {
  queryParam: string,
};
export default function Index({ queryParam }: Props): React.Node {
  return <SearchQuery query={queryParam} />;
}

Index.getInitialProps = ctx => {
  const query = ctx.query?.query ?? '';
  return {
    queryParam: query,
    query: searchQuery,
    variables: {
      query,
      includeResults: !!query,
    },
  };
};
