// @flow

import * as React from 'react';
import { graphql, QueryRenderer, type GraphQLTaggedNode } from '@tbergq/relay';
import { Heading } from '@kiwicom/orbit-components';

import ExerciseList from './exerciseList/ExerciseList';
import type { ExercisesQueryResponse } from './__generated__/ExercisesQuery.graphql';
import AddExerciseForm from './createExercise/AddExerciseForm';

type Props = {||};

export const query: GraphQLTaggedNode = graphql`
  query ExercisesQuery {
    viewer {
      ...AddExerciseForm_user
      ...ExerciseList_exercises
    }
  }
`;

const renderQuery = (props: ?ExercisesQueryResponse) => {
  return (
    <>
      <Heading>My exercises</Heading>
      <AddExerciseForm user={props?.viewer} />
      <ExerciseList exercises={props?.viewer} />
    </>
  );
};

export default (function ExercisesQuery() {
  return <QueryRenderer variables={{}} query={query} render={renderQuery} />;
}: React.ComponentType<Props>);
