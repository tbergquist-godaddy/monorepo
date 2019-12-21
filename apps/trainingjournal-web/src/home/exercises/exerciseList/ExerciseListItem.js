// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';

import type { ExerciseListItem_exercise as Exercise } from './__generated__/ExerciseListItem_exercise.graphql';
import ExerciseDetailCard from './ExerciseDetailCard';
import EditExercise from './EditExercise';

type Props = {|
  +exercise: ?Exercise,
  +userId: ?string,
|};

// TODO: Some animation
function ExerciseListItem(props: Props) {
  const [edit, setEdit] = React.useState(false);
  const onEdit = () => {
    setEdit(true);
  };

  const onClose = () => {
    setEdit(false);
  };

  return (
    <>
      {edit && <EditExercise onClose={onClose} />}

      {!edit && (
        <ExerciseDetailCard onEdit={onEdit} exercise={props.exercise} userId={props.userId} />
      )}
    </>
  );
}

export default createFragmentContainer(ExerciseListItem, {
  exercise: graphql`
    fragment ExerciseListItem_exercise on Exercise {
      ...ExerciseDetailCard_exercise
    }
  `,
});
