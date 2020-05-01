// @flow

import * as React from 'react';
import { Card, CardSection } from '@kiwicom/orbit-components';
import { Formik } from 'formik';
import {
  graphql,
  createFragmentContainer,
  type RelayProp,
  type FragmentContainerType,
} from '@tbergq/relay';

import ExerciseForm from '../createExercise/ExerciseForm';
import type { EditExercise_exercise as Exercise } from './__generated__/EditExercise_exercise.graphql';
import editExercise from './mutation/editExercise';

type Props = {|
  +onClose: () => void,
  +exercise: ?Exercise,
  +relay: RelayProp,
|};

function EditExercise(props: Props) {
  if (props.exercise == null) {
    return <div>Failed to load exercise data</div>;
  }
  const { name, muscleGroups, videoUrl, description, id } = props.exercise;
  const onSubmit = values => {
    if (id != null) {
      editExercise(
        props.relay.environment,
        {
          ...values,
        },
        id,
        () => {
          props.onClose();
        },
      );
    }
  };
  return (
    <Formik
      initialValues={{
        name,
        muscleGroups: muscleGroups ?? '',
        videoUrl: videoUrl ?? '',
        description: description ?? '',
      }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Card>
          <CardSection>
            <form onSubmit={handleSubmit}>
              <ExerciseForm onCancel={props.onClose} isSubmitting={isSubmitting} />
            </form>
          </CardSection>
        </Card>
      )}
    </Formik>
  );
}

export default (createFragmentContainer(EditExercise, {
  exercise: graphql`
    fragment EditExercise_exercise on Exercise {
      id
      name
      muscleGroups
      videoUrl
      description
    }
  `,
}): FragmentContainerType<Props, React.Node>);
