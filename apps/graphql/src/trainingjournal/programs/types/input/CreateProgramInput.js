// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type CreateProgramInputType = {|
  +name: string,
|};

export default (new GraphQLInputObjectType({
  name: 'CreateProgramInput',
  description: 'Input type for creating a new progrem',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
}): GraphQLInputObjectType);
