// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

import type { ProgramsQueryResponse } from './__generated__/ProgramsQuery.graphql';

export const query = graphql`
  query ProgramsQuery {
    viewer {
      ... on TraningJournalViewer {
        programs {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;

const render = (props: ProgramsQueryResponse) => {
  const edges = props.viewer?.programs?.edges ?? [];
  return edges.map(edge => <div key={edge?.node?.id}>{edge?.node?.name}</div>);
};

export default (function ProgramsQuery() {
  return <QueryRenderer query={query} variables={{}} render={render} />;
}: React.ComponentType<{||}>);
