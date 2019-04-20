// @flow

import * as React from 'react';
import { Layout } from '@tbergq/tvhelper-components';
import { withRouter, type Router } from 'next/router';

import SearchScene from '../src/search/SearchScene';

type Props = {
  +router: Router,
};

function Index({ router }: Props) {
  const query = router.query?.query;
  return (
    <Layout>
      <SearchScene query={query} />
    </Layout>
  );
}

export default withRouter<{}>(Index);
