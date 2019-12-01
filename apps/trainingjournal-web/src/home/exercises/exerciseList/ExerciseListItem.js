// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';
import {
  Card,
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from '@tbergq/components';

import type { ExerciseListItem_exercise as Exercise } from './__generated__/ExerciseListItem_exercise.graphql';

type Props = {|
  +exercise: ?Exercise,
|};

function ExerciseListItem(props: Props) {
  return (
    <Card>
      <CardHeader title={props.exercise?.name ?? ''} />
      <CardSection>
        <CardSectionHeader>Muscle groups</CardSectionHeader>
        <CardSectionContent>{props.exercise?.muscleGroups ?? 'None registered'}</CardSectionContent>
      </CardSection>
    </Card>
  );
}

export default createFragmentContainer(ExerciseListItem, {
  exercise: graphql`
    fragment ExerciseListItem_exercise on Exercise {
      name
      muscleGroups
    }
  `,
});
