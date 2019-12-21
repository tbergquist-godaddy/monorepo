// @flow

import * as React from 'react';
import { Card, CardSection } from '@tbergq/components';
import { Formik } from 'formik';

import ExerciseForm from '../createExercise/ExerciseForm';

type Props = {|
  +onClose: () => void,
|};

// TODO: Fill form with values
export default function EditExercise(props: Props) {
  return (
    <Formik initialValues={{ name: '', muscleGroups: '', videoUrl: '', description: '' }}>
      <Card>
        <CardSection>
          <ExerciseForm onCancel={props.onClose} isSubmitting={false} />
        </CardSection>
      </Card>
    </Formik>
  );
}
