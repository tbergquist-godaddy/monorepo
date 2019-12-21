// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type RelayProp } from '@tbergq/relay';
import { Card, CardSection, ButtonLink, TrashIcon, Stack, Pencil } from '@tbergq/components';
import styled from 'styled-components';

import type { ExerciseDetailCard_exercise as Exercise } from './__generated__/ExerciseDetailCard_exercise.graphql';
import deleteExercise from './mutation/deleteExercise';

type Props = {|
  +exercise: ?Exercise,
  +userId: ?string,
  +relay: RelayProp,
  +onEdit: () => void,
|};

const HeaderItem = styled.div({
  width: '100%',
});

function ExerciseDetailCard(props: Props) {
  const onClick = () => {
    const exerciseId = props.exercise?.id;
    if (exerciseId != null && props.userId != null) {
      deleteExercise(props.relay.environment, exerciseId, props.userId);
    }
  };
  const name = props.exercise?.name ?? '';
  return (
    <Card
      title="Title"
      header={
        <HeaderItem>
          <Stack flex={true} justify="between" align="center">
            <div>{name}</div>
            <div>
              <ButtonLink
                icon={<Pencil color="primary" />}
                dataTest={`editButton${props.exercise?.id ?? ''}`}
                onClick={props.onEdit}
                title={`Edit ${name}`}
              />
              <ButtonLink
                icon={<TrashIcon color="critical" />}
                dataTest={`deleteButton${props.exercise?.id ?? ''}`}
                onClick={onClick}
                title={`Delete ${name}`}
              />
            </div>
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

export default createFragmentContainer(ExerciseDetailCard, {
  exercise: graphql`
    fragment ExerciseDetailCard_exercise on Exercise {
      id
      name
      muscleGroups
    }
  `,
});
