// @flow strict-local

import { GraphQLUnionType } from 'graphql';

import User from './User';
import CreateUserError from './CreateUserError';

const CreateUserOrError: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateUserOrError',
  description: 'Type returned when creating a user',
  types: [User, CreateUserError],
  resolveType: (value) => {
    if (value.username) {
      return User;
    }
    return CreateUserError;
  },
});

export default CreateUserOrError;
