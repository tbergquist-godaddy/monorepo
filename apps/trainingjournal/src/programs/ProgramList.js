// @flow

import * as React from 'react';
import { graphql, createPaginationContainer, type PaginationRelayProp } from '@tbergq/relay';
import { Button } from '@tbergq/components';

import type { ProgramList_programs as Programs } from './__generated__/ProgramList_programs.graphql';
import ProgramItem from './ProgramItem';

type Props = {|
  +programs: ?Programs,
  +relay: PaginationRelayProp,
|};

const ProgramList = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const edges = props.programs?.programs?.edges ?? [];
  function refetch() {
    setIsLoading(true);
    props.relay.loadMore(10, () => {
      setIsLoading(false);
    });
  }
  return (
    <div>
      <div>
        {edges.map(edge => (
          <ProgramItem key={edge?.node?.id} program={edge?.node} />
        ))}
      </div>
      {props.relay.hasMore() && (
        <Button loading={isLoading} onClick={refetch}>
          load more
        </Button>
      )}
    </div>
  );
};

export default createPaginationContainer(
  ProgramList,
  {
    programs: graphql`
      fragment ProgramList_programs on RootQuery
        @argumentDefinitions(
          first: { type: "Int", defaultValue: 10 }
          cursor: { type: "String", defaultValue: null }
        ) {
        programs(first: $first, after: $cursor) @connection(key: "ProgramList_programs") {
          edges {
            node {
              id
              ...ProgramItem_program
            }
          }
        }
      }
    `,
  },
  {
    getVariables(props, { count, cursor }) {
      return {
        first: count,
        after: cursor,
      };
    },
    query: graphql`
      query ProgramListQuery($first: Int!, $after: String) {
        ...ProgramList_programs @arguments(first: $first, cursor: $after)
      }
    `,
  },
);
