// @flow strict-local

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import { connectionDefinitions } from '@adeira/graphql-relay';
import { type GraphQLConnectionDefinitions } from '@tbergq/graphql-services';

const Exercise: GraphQLObjectType = new GraphQLObjectType({
  name: 'Exercise',
  description: 'An exercise',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});

const { connectionType: ExerciseConnection, edgeType: ExerciseEdge } = (connectionDefinitions({
  nodeType: Exercise,
}): GraphQLConnectionDefinitions);

export { ExerciseConnection, ExerciseEdge, Exercise };
