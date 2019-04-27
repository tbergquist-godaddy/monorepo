// @flow

import * as React from 'react';
import { withRouter, type Router } from 'next/router';

import Layout from '../../src/components/Layout';
import ProgramDetailScene from '../../src/programDetail/ProgramDetailScene';

type Props = {
  +router: Router,
};

const Detail = ({ router }: Props) => {
  const programId = router.query.programId;
  return (
    <Layout>{programId && <ProgramDetailScene programId={programId} />}</Layout>
  );
};

export default withRouter<{}>(Detail);
