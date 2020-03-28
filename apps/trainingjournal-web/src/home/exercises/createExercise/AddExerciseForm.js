// @flow

import * as React from 'react';
import { withFormik, type InjectedFormikProps, type FormikBag } from 'formik';
import { SlideIn, FloatingAddButton } from '@tbergq/components';
import { graphql, createFragmentContainer, type RelayProp } from '@tbergq/relay';

import ExerciseForm from './ExerciseForm';
import addExerciseMutation from './mutation/addExerciseMutation';
import type { AddExerciseForm_user as User } from './__generated__/AddExerciseForm_user.graphql';

type ExerciseValues = {|
  +name: string,
  +muscleGroups: string,
  +videoUrl: string,
  +description: string,
|};

type Props = {|
  +user: ?User,
  +relay: RelayProp,
|};

function AddExerciseForm(props: InjectedFormikProps<Props, ExerciseValues>) {
  const [showForm, setShowForm] = React.useState(false);
  const lastIsSubmitting = React.useRef(false);
  React.useEffect(() => {
    if (props.isSubmitting === false && lastIsSubmitting.current === true) {
      setShowForm(false);
    }
    lastIsSubmitting.current = props.isSubmitting;
  }, [props.isSubmitting]);
  return (
    <>
      <FloatingAddButton
        onClick={() => {
          setShowForm(show => !show);
        }}
        rotate={showForm}
        ariaLabel="Add exercise"
      />
      <SlideIn isExpanded={showForm}>
        <form onSubmit={props.handleSubmit}>
          <ExerciseForm isSubmitting={props.isSubmitting} />
        </form>
      </SlideIn>
    </>
  );
}

const WithFormik = withFormik<Props, ExerciseValues>({
  mapPropsToValues: () => ({
    name: '',
    muscleGroups: '',
    videoUrl: '',
    description: '',
  }),
  validate: values => {
    const errors = {};
    if (values.name === '') {
      errors.name = 'Required';
    }
    return errors;
  },
  handleSubmit: (
    values: ExerciseValues,
    { props, setSubmitting, resetForm }: FormikBag<Props, ExerciseValues>,
  ) => {
    const userId = props.user?.id;
    if (userId != null) {
      setSubmitting(true);
      addExerciseMutation(props.relay.environment, { input: { ...values } }, userId, () => {
        setSubmitting(false);
        resetForm();
      });
    }
  },
})(AddExerciseForm);

export default (createFragmentContainer(WithFormik, {
  user: graphql`
    fragment AddExerciseForm_user on Viewer {
      ... on TraningJournalViewer {
        id
      }
    }
  `,
}): $FlowFixMe);
