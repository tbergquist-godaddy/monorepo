// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@tbergq/relay';

import type { ExerciseListItem_exercise as Exercise } from './__generated__/ExerciseListItem_exercise.graphql';

type Props = {|
  +exercise: ?Exercise,
|};

function ExerciseListItem(props: Props) {
  return <div>{props.exercise?.name}</div>;
}

export default createFragmentContainer(ExerciseListItem, {
  exercise: graphql`
    fragment ExerciseListItem_exercise on Exericse {
      name
    }
  `,
});
