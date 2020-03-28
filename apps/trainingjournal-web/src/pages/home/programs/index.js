// @flow

import * as React from 'react';

import ProgramsQuery, { query } from '../../../home/programs/ProgramsQuery';

function Programs() {
  return <ProgramsQuery />;
}

Programs.getInitialProps = () => {
  return { query };
};

export default (Programs: React.ComponentType<{}>);
