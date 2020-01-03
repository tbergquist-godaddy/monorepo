// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type CreateProgramInputType = {|
  +name: string,
|};

export default new GraphQLInputObjectType({
  name: 'CreateProgramInput',
  fields: {
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
