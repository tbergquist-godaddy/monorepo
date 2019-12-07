// @flow

import { GraphQLObjectType } from 'graphql';

import { ExerciseEdge } from './ExerciseConnection';

export default new GraphQLObjectType({
  name: 'CreateExercise',
  fields: {
    exerciseEdge: {
      type: ExerciseEdge,
    },
  },
});
