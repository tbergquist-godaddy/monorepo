// @flow strict

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type UserInput = {
  +username: string,
  +email: string,
  +password: string,
};

const CreateUserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Object type to create a new user',
  fields: {
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});

export default CreateUserInput;
