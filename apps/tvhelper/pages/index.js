// @flow strict-local

import type { Node } from 'react';
import type { Context } from 'next';
import type { GraphQLTaggedNode } from '@tbergq/relay';

import SearchQuery, { searchQuery } from '../src/search/SearchQuery';

type InitialProps = {
  +query: GraphQLTaggedNode,
  +queryParam: string,
  +variables: {
    +query: string,
    +includeResults: boolean,
  },
};
type Props = {
  queryParam: string,
};
export default function Index({ queryParam }: Props): Node {
  return <SearchQuery query={queryParam} />;
}

Index.getInitialProps = (ctx: Context): InitialProps => {
  const query = ctx.query?.query ?? '';
  return {
    queryParam: query,
    query: searchQuery,
    variables: {
      query,
      includeResults: query !== '',
    },
  };
};
