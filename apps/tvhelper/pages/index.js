// @flow

import * as React from 'react';
import { QueryRendererProvider, fetchQuery, Environment } from '@tbergq/relay';

import Layout from '../src/components/Layout';
import SearchScene from '../src/search/SearchScene';
import { searchQuery } from '../src/search/SearchQuery';

type Props = {|
  +json: {| +[key: string]: any |},
|};

export default function Index(props: Props) {
  return (
    <QueryRendererProvider initialValue={props.json}>
      <Layout>
        <SearchScene />
      </Layout>
    </QueryRendererProvider>
  );
}

Index.getInitialProps = async ctx => {
  const environment = Environment.getEnvironment();
  const query = ctx.query?.query;
  let json;
  if (query) {
    await fetchQuery(environment, searchQuery, { query });
    json = environment
      .getStore()
      .getSource()
      .toJSON();
  }
  return { json };
};
