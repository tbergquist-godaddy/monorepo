// @flow

import * as React from 'react';
import { useRouter } from 'next/router';
import { getNextToken } from '@tbergq/utils';
import { QueryRendererProvider } from '@tbergq/relay';

import Layout from '../src/components/Layout';
import TvShowQuery from '../src/tvShow/TvShowQuery';

type Props = {|
  +token: ?string,
|};

function TvShowPage(props: Props) {
  const router = useRouter();
  return (
    <QueryRendererProvider initialValue={null} token={props.token}>
      <Layout isLoggedIn={props.token != null}>
        <TvShowQuery tvShowId={router.query.id} />
      </Layout>
    </QueryRendererProvider>
  );
}

TvShowPage.getInitialProps = ctx => {
  return { token: getNextToken(ctx) };
};

export default TvShowPage;
