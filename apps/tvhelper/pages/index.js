// @flow

import * as React from 'react';
import { QueryRendererProvider, fetchQuery, Environment } from '@tbergq/relay';
import { getNextToken } from '@tbergq/utils';

import Layout from '../src/components/Layout';
import SearchScene from '../src/search/SearchScene';
import { searchQuery } from '../src/search/SearchQuery';

type Props = {|
  +json: {| +[key: string]: any |},
  +token: ?string,
|};

export default function Index(props: Props) {
  return (
    <QueryRendererProvider initialValue={props.json} token={props.token}>
      <Layout isLoggedIn={props.token != null}>
        <SearchScene />
      </Layout>
    </QueryRendererProvider>
  );
}

Index.getInitialProps = async ctx => {
  const token = getNextToken(ctx);
  const query = ctx.query?.query;
  let json;
  if (query) {
    const environment = Environment.getEnvironment();
    await fetchQuery(environment, searchQuery, { query });
    json = environment
      .getStore()
      .getSource()
      .toJSON();
  }
  return { json, token };
};
