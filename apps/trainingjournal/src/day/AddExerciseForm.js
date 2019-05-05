// @flow

import * as React from 'react';
import { Input, Button } from '@tbergq/components';
import styled from 'styled-components';
import {
  createFragmentContainer,
  graphql,
  type RelayProp,
} from '@tbergq/relay';

import addExerciseMutation from './mutation/addExerciseMutation';
import type { AddExerciseForm_day as Day } from './__generated__/AddExerciseForm_day.graphql';

const Form = styled.form({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  div: {
    marginRight: '8px',
  },
});

type Props = {|
  +day: ?Day,
  +hideForm: () => void,
  +relay: RelayProp,
|};

function AddExerciseForm(props: Props) {
  const [breakTime, setBreakTime] = React.useState('');
  const [set, setSet] = React.useState('');
  const [reps, setReps] = React.useState('');
  const onSubmit = React.useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      const dayId = props.day?.id;
      if (dayId != null) {
        addExerciseMutation(
          props.relay.environment,
          {
            exercise: {
              breakTime: parseInt(breakTime, 10),
              set,
              reps,
              dayId,
              baseExerciseId: 'YmFzZUV4ZXJjaXNlOjM4',
            },
          },
          () => {
            props.hideForm();
          },
        );
      }
    },
    [breakTime, props, reps, set],
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input value={set} onChange={setSet} label="Set" />
      <Input value={reps} onChange={setReps} label="Reps" />
      <Input value={breakTime} onChange={setBreakTime} label="Break" />
      <Button submit={true}>Save</Button>
    </Form>
  );
}

export default createFragmentContainer(AddExerciseForm, {
  day: graphql`
    fragment AddExerciseForm_day on Day {
      id
    }
  `,
});
