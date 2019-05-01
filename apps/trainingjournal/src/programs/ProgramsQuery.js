// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { ProgramsQueryResponse } from './__generated__/ProgramsQuery.graphql';
import ProgramList from './ProgramList';

const renderInner = (props: ProgramsQueryResponse) => (
  <ProgramList programs={props} />
);

export default function ProgramsQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query ProgramsQuery {
          ...ProgramList_programs
        }
      `}
      render={renderInner}
      variables={{}}
    />
  );
}
