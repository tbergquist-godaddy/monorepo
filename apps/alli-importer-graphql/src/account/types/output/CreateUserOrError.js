// @flow strict-local

import { GraphQLUnionType } from 'graphql';

import GeneralError from '../../../types/GeneralError';
import User from './User';

export class CreateUserError {
  message: string;
  constructor(e: Error) {
    if (e.message.includes('duplicate key error collection')) {
      this.message = 'A user with this email already exist';
    } else {
      this.message = e.message;
    }
  }
}

const CreateUserOrError: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateUserOrError',
  types: [GeneralError, User],
  resolveType: value => {
    if (value instanceof CreateUserError) {
      return GeneralError;
    }
    return User;
  },
});

export default CreateUserOrError;
