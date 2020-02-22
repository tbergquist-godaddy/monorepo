// @flow

import { GraphQLObjectType } from 'graphql';

import { ProgramEdge } from './ProgramConnection';

export default new GraphQLObjectType({
  name: 'CreateProgram',
  description: 'A newly created program',
  fields: {
    programEdge: {
      type: ProgramEdge,
    },
  },
});
