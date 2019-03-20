// @flow

import * as React from 'react';
import { Layout } from '@tbergq/tvhelper-components';
import { withRouter, type Router } from 'next/router';

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
