// @flow strict

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateUserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Create user input type',
  fields: {
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    email: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
  },
});

export default CreateUserInput;
