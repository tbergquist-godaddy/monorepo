// @flow

import * as React from 'react';
import { Input, Button, Row, Col } from '@tbergq/components';
import styled from 'styled-components';
import { createFragmentContainer, graphql, type RelayProp } from '@tbergq/relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import addExerciseMutation from './mutation/addExerciseMutation';
import type { AddExerciseForm_day as Day } from './__generated__/AddExerciseForm_day.graphql';
import SelectExerciseQuery from './SelectExerciseQuery';

const ButtonWrapper = styled(Col)({
  display: 'flex',
  alignItems: 'flex-end',
  [`@media only screen and (max-width: ${defaultTokens.widthBreakpointTablet}px)`]: {
    justifyContent: 'flex-end',
    marginTop: defaultTokens.spaceXSmall,
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
  const [baseExerciseId, setExerciseId] = React.useState('');
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
              baseExerciseId,
            },
          },
          () => {
            props.hideForm();
          },
        );
      }
    },
    [baseExerciseId, breakTime, props, reps, set],
  );

  return (
    <form onSubmit={onSubmit}>
      <Row>
        <Col md={4}>
          <SelectExerciseQuery onSelect={setExerciseId} />
        </Col>
        <Col md={2}>
          <Input value={set} onChange={setSet} label="Set" />
        </Col>
        <Col md={2}>
          <Input value={reps} onChange={setReps} label="Reps" />
        </Col>
        <Col md={2}>
          <Input value={breakTime} onChange={setBreakTime} label="Break" />
        </Col>
        <ButtonWrapper md={2}>
          <Button submit={true}>Save</Button>
        </ButtonWrapper>
      </Row>
    </form>
  );
}

export default createFragmentContainer(AddExerciseForm, {
  day: graphql`
    fragment AddExerciseForm_day on Day {
      id
    }
  `,
});
