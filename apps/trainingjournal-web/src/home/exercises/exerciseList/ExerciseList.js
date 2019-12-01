// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { Grid } from '@tbergq/components';

import ExerciseListItem from './ExerciseListItem';
import type { ExerciseList_exercises as Exercises } from './__generated__/ExerciseList_exercises.graphql';

type Props = {|
  +exercises: ?Exercises,
|};

function ExerciseList(props: Props) {
  const edges = props.exercises?.exercises?.edges ?? [];
  return (
    <Grid
      columns="1fr"
      tablet={{ columns: '1fr 1fr' }}
      desktop={{ columns: '1fr 1fr 1fr' }}
      columnGap="16px"
      rowGap="16px"
    >
      {edges.map<React.Node>(edge => (
        <ExerciseListItem key={edge?.node?.id} exercise={edge?.node} />
      ))}
    </Grid>
  );
}

export default createFragmentContainer(ExerciseList, {
  exercises: graphql`
    fragment ExerciseList_exercises on TraningJournalViewer {
      exercises(first: 10) {
        edges {
          node {
            id
            ...ExerciseListItem_exercise
          }
        }
      }
    }
  `,
});
