// @flow strict-local

import { GraphQLUnionType } from 'graphql';

import User from './User';
import Unauthorized from './Unauthorized';

export default (new GraphQLUnionType({
  name: 'Viewer',
  types: [User, Unauthorized],
  resolveType: (value) => {
    if (value !== 'Unauthorized') {
      return User;
    }
    return Unauthorized;
  },
}): GraphQLUnionType);
