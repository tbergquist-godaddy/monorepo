// @flow

import * as React from 'react';

import ProgramsQuery, { query } from '../../../home/programs/ProgramsQuery';

export default function Programs() {
  return <ProgramsQuery />;
}

Programs.getInitialProps = () => {
  return { query };
};
