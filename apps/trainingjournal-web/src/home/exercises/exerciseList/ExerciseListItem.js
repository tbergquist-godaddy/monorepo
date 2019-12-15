// @flow

import * as React from 'react';
import { graphql, createFragmentContainer, type RelayProp } from '@tbergq/relay';
import {
  Card,
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from '@tbergq/components';

import type { ExerciseListItem_exercise as Exercise } from './__generated__/ExerciseListItem_exercise.graphql';
import deleteExercise from './mutation/deleteExercise';

type Props = {|
  +exercise: ?Exercise,
  +userId: ?string,
  +relay: RelayProp,
|};

function ExerciseListItem(props: Props) {
  const onClick = () => {
    const exerciseId = props.exercise?.id;
    if (exerciseId != null && props.userId != null) {
      deleteExercise(props.relay.environment, exerciseId, props.userId);
    }
  };
  return (
    <Card>
      <CardHeader title={props.exercise?.name ?? ''} />
      <CardSection>
        <CardSectionHeader>
          <button type="button" onClick={onClick}>
            delete
          </button>
          Muscle groups
        </CardSectionHeader>
        <CardSectionContent>{props.exercise?.muscleGroups ?? 'None registered'}</CardSectionContent>
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
