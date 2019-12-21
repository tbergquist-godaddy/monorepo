// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type RelayProp } from '@tbergq/relay';
import { Card, CardSection, ButtonLink, TrashIcon, Stack } from '@tbergq/components';
import styled from 'styled-components';

import type { ExerciseListItem_exercise as Exercise } from './__generated__/ExerciseListItem_exercise.graphql';
import deleteExercise from './mutation/deleteExercise';

type Props = {|
  +exercise: ?Exercise,
  +userId: ?string,
  +relay: RelayProp,
|};

const HeaderItem = styled.div({
  width: '100%',
});

function ExerciseListItem(props: Props) {
  const onClick = () => {
    const exerciseId = props.exercise?.id;
    if (exerciseId != null && props.userId != null) {
      deleteExercise(props.relay.environment, exerciseId, props.userId);
    }
  };
  return (
    <Card
      title="Title"
      header={
        <HeaderItem>
          <Stack flex={true} justify="between" align="center">
            <div>{props.exercise?.name ?? ''}</div>
            <ButtonLink dataTest={`deleteButton${props.exercise?.id ?? ''}`} onClick={onClick}>
              <TrashIcon color="critical" />
            </ButtonLink>
          </Stack>
        </HeaderItem>
      }
      dataTest={props.exercise?.id}
    >
      <CardSection header={<>Muscle groups</>}>
        {props.exercise?.muscleGroups || 'None registered'}
      </CardSection>
    </Card>
  );
}

export default createFragmentContainer(ExerciseListItem, {
  exercise: graphql`
    fragment ExerciseListItem_exercise on Exercise {
      id
      name
      muscleGroups
    }
  `,
});
