// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@tbergq/relay';

import type { ExercisesQueryResponse } from './__generated__/ExercisesQuery.graphql';

type Props = {||};

export const query = graphql`
  query ExercisesQuery {
    viewer {
      ... on TraningJournalViewer {
        exercises(first: 10) {
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

const renderQuery = (props: ExercisesQueryResponse) => {
  const edges = props.viewer?.exercises?.edges ?? [];
  return edges.map(edge => <div key={edge?.node?.id}>{edge?.node?.name}</div>);
};

export default (function ExercisesQuery() {
  return <QueryRenderer variables={{}} query={query} render={renderQuery} />;
}: React.ComponentType<Props>);
