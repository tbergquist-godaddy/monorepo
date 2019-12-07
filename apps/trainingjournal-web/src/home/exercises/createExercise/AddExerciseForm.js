// @flow

import * as React from 'react';
import { withFormik, type InjectedFormikProps, type FormikBag } from 'formik';
import styled, { keyframes, css } from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { AddIcon } from '@tbergq/components';
import { graphql, createFragmentContainer, type RelayProp } from '@tbergq/relay';

import ExerciseForm from './ExerciseForm';
import addExerciseMutation from './mutation/addExerciseMutation';
import type { AddExerciseForm_user as User } from './__generated__/AddExerciseForm_user.graphql';

const AddButton = styled.button({
  cursor: 'pointer',
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  borderRadius: '50%',
  padding: '16px',
  backgroundColor: defaultTokens.backgroundButtonInfo,
  color: defaultTokens.paletteWhite,
  ':focus': {
    boxShadow: '0 0 3px #000',
  },
  outline: 'none',
  zIndex: defaultTokens.zIndexSticky,
});

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(45deg);
}
`;

const reverseRotate = keyframes`
0% {
  transform: rotate(45deg);
}
100% {
  transform: rotate(0deg);
}
`;

const Icon = styled(AddIcon)`
  transform: rotate(${props => (props.rotate ? 45 : 0)}deg);
  animation: ${props =>
    props.rotate
      ? css`
          ${rotateAnimation} .1s linear
        `
      : css`
          ${reverseRotate} .1s linear
        `};
`;

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
      <form onSubmit={props.handleSubmit}>
        <ExerciseForm isSubmitting={props.isSubmitting} isVisible={showForm} />
      </form>

      <AddButton
        type="button"
        onClick={() => {
          setShowForm(show => !show);
        }}
        aria-label="Add exercise"
      >
        <Icon rotate={showForm} />
      </AddButton>
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

export default createFragmentContainer(WithFormik, {
  user: graphql`
    fragment AddExerciseForm_user on Viewer {
      ... on TraningJournalViewer {
        id
      }
    }
  `,
});
