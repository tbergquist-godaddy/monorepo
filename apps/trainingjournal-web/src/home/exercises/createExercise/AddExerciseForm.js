// @flow

import * as React from 'react';
import { withFormik, type InjectedFormikProps } from 'formik';
import styled, { keyframes, css } from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { AddIcon } from '@tbergq/components';

import ExerciseForm from './ExerciseForm';

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

type Props = {||};

function AddExerciseForm(props: InjectedFormikProps<Props, ExerciseValues>) {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <ExerciseForm isVisible={showForm} />
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

export default withFormik<Props, ExerciseValues>({
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
  handleSubmit: (values: ExerciseValues) => {
    // eslint-disable-next-line no-console
    console.log('handleSubmit', values);
  },
})(AddExerciseForm);
