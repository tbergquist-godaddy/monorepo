// @flow

import * as React from 'react';
import { withRouter, type Router } from 'next/router';

import Layout from '../../src/components/Layout';

type Props = {
  +router: Router,
};

const Detail = ({ router }: Props) => {
  return (
    <Layout>
      <div>programId {router.query.programId}</div>
    </Layout>
  );
};

export default withRouter<{}>(Detail);
