// @flow

import * as React from 'react';

import Layout from '../src/components/Layout';
import SearchScene from '../src/search/SearchScene';
import { searchQuery } from '../src/search/SearchQuery';

type Props = {|
  +isLoggedIn: boolean,
|};

export default function Index(props: Props) {
  return (
    <Layout isLoggedIn={props.isLoggedIn}>
      <SearchScene />
    </Layout>
  );
}

Index.getInitialProps = ctx => {
  const query = ctx.query?.query;
  if (query) {
    return {
      query: searchQuery,
      variables: {
        query,
      },
    };
  }
  return {};
};
