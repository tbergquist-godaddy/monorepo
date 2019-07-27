// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@tbergq/components';

import type { ExerciseTable_day as DayType } from './__generated__/ExerciseTable_day.graphql';
import ExerciseRow from './ExerciseRow';

type Props = {|
  +day: ?DayType,
|};

const ExerciseTable = (props: Props) => {
  const exercises = props.day?.exercises?.edges ?? [];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Exercise</TableCell>
          <TableCell>Sets</TableCell>
          <TableCell>Reps</TableCell>
          <TableCell>Break</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exercises.map(edge => (
          <ExerciseRow key={edge?.node?.id} exercise={edge?.node} />
        ))}
      </TableBody>
    </Table>
  );
};

export default createFragmentContainer(ExerciseTable, {
  day: graphql`
    fragment ExerciseTable_day on Day {
      exercises(first: 50) @connection(key: "ExerciseTable_exercises") {
        edges {
          node {
            id
            ...ExerciseRow_exercise
          }
        }
      }
    }
  `,
});
