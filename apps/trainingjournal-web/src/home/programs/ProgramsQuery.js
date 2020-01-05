// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';
import { Heading } from '@tbergq/components';

import type { ProgramsQueryResponse } from './__generated__/ProgramsQuery.graphql';
import ProgramList from './programList/ProgramList';

export const query = graphql`
  query ProgramsQuery {
    viewer {
      ...ProgramList_viewer
    }
  }
`;

const render = (props: ProgramsQueryResponse) => {
  return (
    <>
      <Heading>My programs</Heading>
      <ProgramList viewer={props.viewer} />
    </>
  );
};

export default (function ProgramsQuery() {
  return <QueryRenderer query={query} variables={{}} render={render} />;
}: React.ComponentType<{||}>);
