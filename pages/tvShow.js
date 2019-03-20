// @flow

import * as React from 'react';
import { Layout } from '@tbergq/tvhelper-components';
import { withRouter, type Router } from 'next/router';

type Props = {
  +router: Router,
};

function TvShowPage(props: Props) {
  return (
    <Layout>
      <div>{props.router.query.id}</div>
    </Layout>
  );
}

export default withRouter<{}>(TvShowPage);
