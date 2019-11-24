// @flow strict

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Unauthorized',
  isTypeOf: value => value === 'Unauthorized',
  fields: {
    message: {
      type: GraphQLString,
      resolve: () => {
        return 'You must be logged in to se this content';
      },
    },
  },
});
