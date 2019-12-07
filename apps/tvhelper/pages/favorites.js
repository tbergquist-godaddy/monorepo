// @flow

import * as React from 'react';
import { getNextToken } from '@tbergq/utils';
import { QueryRendererProvider, fetchQuery, Environment, type RecordMap } from '@tbergq/relay';

import Layout from '../src/components/Layout';
import FavoriteQuery, { favoritesQuery } from '../src/favorites/FavoriteQuery';

type Props = {|
  +json: ?RecordMap,
  +token: ?string,
|};

export default function Favorites(props: Props) {
  return (
    <QueryRendererProvider initialValue={props.json} token={props.token}>
      <Layout isLoggedIn={props.token != null}>
        <FavoriteQuery />
      </Layout>
    </QueryRendererProvider>
  );
}

Favorites.getInitialProps = async ctx => {
  const token = getNextToken(ctx);

  const environment = Environment.getEnvironment(token);
  const query = ctx.query?.query;
  let json;
  if (token) {
    await fetchQuery(environment, favoritesQuery, { query });
    json = environment
      .getStore()
      .getSource()
      .toJSON();
  } else {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
  }

  return { json, token };
};
