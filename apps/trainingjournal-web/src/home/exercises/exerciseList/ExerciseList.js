// @flow

import * as React from 'react';
import { graphql, createPaginationContainer, type PaginationRelayProp } from '@tbergq/relay';
import { Grid, Button, Stack } from '@tbergq/components';

import ExerciseListItem from './ExerciseListItem';
import type { ExerciseList_exercises as Exercises } from './__generated__/ExerciseList_exercises.graphql';

type Props = {|
  +exercises: ?Exercises,
  +relay: PaginationRelayProp,
|};

function ExerciseList(props: Props) {
  const edges = props.exercises?.exercises?.edges ?? [];
  const [isLoading, setLoading] = React.useState(false);
  const loadMore = () => {
    if (props.relay.hasMore() && !props.relay.isLoading()) {
      setLoading(true);
      props.relay.loadMore(10, () => {
        setLoading(false);
      });
    }
  };
  return (
    <>
      <Grid
        columns="1fr"
        tablet={{ columns: '1fr 1fr' }}
        desktop={{ columns: '1fr 1fr 1fr' }}
        columnGap="16px"
        rowGap="16px"
      >
        {edges.map<React.Node>(edge => (
          <ExerciseListItem
            key={edge?.node?.id}
            exercise={edge?.node}
            userId={props.exercises?.id}
          />
        ))}
      </Grid>
      {props.exercises?.exercises?.pageInfo.hasNextPage === true && (
        <Stack flex={true} justify="center">
          <Button dataTest="loadMore" loading={isLoading} type="secondary" onClick={loadMore}>
            Load more
          </Button>
        </Stack>
      )}
    </>
  );
}

export default createPaginationContainer(
  ExerciseList,
  {
    exercises: graphql`
      fragment ExerciseList_exercises on TraningJournalViewer
        @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, after: { type: "String" }) {
        id
        exercises(first: $count, after: $after) @connection(key: "ExerciseList_exercises") {
          pageInfo {
            hasNextPage
          }
          edges {
            node {
              id
              ...ExerciseListItem_exercise
            }
          }
        }
      }
    `,
  },
  {
    getVariables: (props, paginationInfo) => paginationInfo,
    query: graphql`
      query ExerciseListPaginationQuery($count: Int, $cursor: String) {
        viewer {
          ...ExerciseList_exercises @arguments(count: $count, after: $cursor)
        }
      }
    `,
  },
);
