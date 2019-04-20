// @flow

import * as React from 'react';
import { withRouter, type Router } from 'next/router';

import Layout from '../src/components/Layout';
import TvShowQuery from '../src/tvShow/TvShowQuery';

type Props = {
  +router: Router,
};

function TvShowPage(props: Props) {
  return (
    <Layout>
      <TvShowQuery tvShowId={props.router.query.id} />
    </Layout>
  );
}

export default withRouter<{}>(TvShowPage);
