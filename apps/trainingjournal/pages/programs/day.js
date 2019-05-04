// @flow

import * as React from 'react';
import { withRouter, type Router } from 'next/router';

import Layout from '../../src/components/Layout';
import DayDetailScene from '../../src/day/DayDetailScene';

type Props = {
  +router: Router,
};

const Day = ({ router }: Props) => {
  const dayId = router.query.dayId;
  return <Layout>{dayId != null && <DayDetailScene dayId={dayId} />}</Layout>;
};

export default withRouter<{}>(Day);
