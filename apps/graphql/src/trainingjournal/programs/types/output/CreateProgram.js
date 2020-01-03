// @flow

import { GraphQLObjectType } from 'graphql';

import { ProgramEdge } from './ProgramConnection';

export default new GraphQLObjectType({
  name: 'CreateProgram',
  fields: {
    programEdge: {
      type: ProgramEdge,
    },
  },
});
