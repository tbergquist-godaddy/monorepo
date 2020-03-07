// @flow

import * as React from 'react';
import { useRouter } from 'next/router';

import Layout from '../src/components/DeprecatedLayout';
import TvShowQuery, { tvShowQuery } from '../src/tvShow/TvShowQuery';

type Props = {|
  +isLoggedIn: boolean,
|};

function TvShowPage(props: Props) {
  const router = useRouter();
  return (
    <Layout isLoggedIn={props.isLoggedIn}>
      <TvShowQuery tvShowId={router.query.id} />
    </Layout>
  );
}

TvShowPage.getInitialProps = ctx => {
  const id = ctx.query?.id;
  return {
    query: tvShowQuery,
    variables: { id },
  };
};

export default TvShowPage;
