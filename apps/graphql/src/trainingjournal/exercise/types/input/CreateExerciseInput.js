// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type CreateExerciseType = {|
  +name: string,
  +muscleGroups?: string,
  +videoUrl?: string,
  +description?: string,
|};

export default new GraphQLInputObjectType({
  name: 'CreateExerciseInput',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    muscleGroups: {
      type: GraphQLString,
    },
    videoUrl: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});
