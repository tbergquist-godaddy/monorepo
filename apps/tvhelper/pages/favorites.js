// @flow

import * as React from 'react';
import { isLoggedIn, TOKEN_KEY } from '@tbergq/utils';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { QueryRendererProvider, fetchQuery, Environment } from '@tbergq/relay';

import Layout from '../src/components/Layout';
import FavoriteQuery, { favoritesQuery } from '../src/favorites/FavoriteQuery';

type Props = {|
  +json: {| +[key: string]: mixed |},
|};

export default function Favorites(props: Props) {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      Router.push('/login');
    }
  });
  return (
    <QueryRendererProvider initialValue={props.json}>
      <Layout>
        <FavoriteQuery />
      </Layout>
    </QueryRendererProvider>
  );
}

Favorites.getInitialProps = async ctx => {
  const tokens = nextCookie(ctx) ?? {};
  const token = tokens[TOKEN_KEY];
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

  return { json };
};
