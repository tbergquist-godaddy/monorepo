// @flow

import * as React from 'react';
import { useRouter } from 'next/router';
import { getNextToken } from '@tbergq/utils';
import { QueryRendererProvider, fetchQuery, Environment, type RecordMap } from '@tbergq/relay';

import Layout from '../src/components/Layout';
import TvShowQuery, { tvShowQuery } from '../src/tvShow/TvShowQuery';

type Props = {|
  +json: ?RecordMap,
  +token: ?string,
|};

function TvShowPage(props: Props) {
  const router = useRouter();
  return (
    <QueryRendererProvider initialValue={props.json} token={props.token}>
      <Layout isLoggedIn={props.token != null}>
        <TvShowQuery tvShowId={router.query.id} />
      </Layout>
    </QueryRendererProvider>
  );
}

TvShowPage.getInitialProps = async ctx => {
  const token = getNextToken(ctx);

  const environment = Environment.getEnvironment(token);
  const id = ctx.query?.id;
  await fetchQuery(environment, tvShowQuery, { id });

  const json = environment
    .getStore()
    .getSource()
    .toJSON();

  return { json, token };
};

export default TvShowPage;
