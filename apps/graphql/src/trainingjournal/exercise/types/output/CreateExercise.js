// @flow

import { GraphQLObjectType } from 'graphql';

import { ExerciseEdge } from './ExerciseConnection';

export default (new GraphQLObjectType({
  name: 'CreateExercise',
  description: 'The return type for create exercise mutation',
  fields: {
    exerciseEdge: {
      type: ExerciseEdge,
    },
  },
}): GraphQLObjectType);
