// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';
import { TableRow, TableCell } from '@tbergq/components';

import type { ExerciseRow_exercise as ExerciseType } from './__generated__/ExerciseRow_exercise.graphql';

type Props = {|
  +exercise: ?ExerciseType,
|};

const ExerciseRow = (props: Props) => {
  return (
    <TableRow>
      <TableCell>{props.exercise?.baseExercise?.name}</TableCell>
      <TableCell>{props.exercise?.set}</TableCell>
      <TableCell>{props.exercise?.reps}</TableCell>
      <TableCell>{props.exercise?.breakTime} min</TableCell>
    </TableRow>
  );
};

export default createFragmentContainer(ExerciseRow, {
  exercise: graphql`
    fragment ExerciseRow_exercise on Exercise {
      set
      reps
      breakTime
      baseExercise {
        name
      }
    }
  `,
});
