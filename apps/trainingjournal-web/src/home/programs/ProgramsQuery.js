// @flow

import * as React from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';
import { Heading } from '@kiwicom/orbit-components';

import type { ProgramsQueryResponse } from './__generated__/ProgramsQuery.graphql';
import ProgramList from './programList/ProgramList';
import AddProgramForm from './AddProgramForm';

export const query: GraphQLTaggedNode = graphql`
  query ProgramsQuery {
    viewer {
      ...ProgramList_viewer
      ...AddProgramForm_user
    }
  }
`;

const render = (props: ?ProgramsQueryResponse) => {
  return (
    <>
      <Heading>My programs</Heading>
      <AddProgramForm user={props?.viewer} />
      <ProgramList viewer={props?.viewer} />
    </>
  );
};

export default (function ProgramsQuery() {
  return <QueryRenderer query={query} variables={{}} render={render} />;
}: React.ComponentType<{||}>);
