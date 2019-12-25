// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import { FadeInOut } from '@tbergq/components';

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
  const [slide, setSlide] = React.useState(false);
  const onEdit = () => {
    setEdit(true);
  };

  const onClose = () => {
    setEdit(false);
  };

  React.useEffect(() => {
    // Don't slide in on mount
    setSlide(true);
  }, []);

  return (
    <>
      <FadeInOut left={slide} by={300} activate={edit}>
        <EditExercise exercise={props.exercise} onClose={onClose} />
      </FadeInOut>
      <FadeInOut left={slide} by={300} activate={!edit}>
        <ExerciseDetailCard onEdit={onEdit} exercise={props.exercise} userId={props.userId} />
      </FadeInOut>
    </>
  );
}

export default createFragmentContainer(ExerciseListItem, {
  exercise: graphql`
    fragment ExerciseListItem_exercise on Exercise {
      ...ExerciseDetailCard_exercise
      ...EditExercise_exercise
    }
  `,
});
