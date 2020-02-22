// @flow

import { GraphQLBoolean, GraphQLObjectType } from 'graphql';

const CreateUserType = new GraphQLObjectType({
  name: 'CreateUserMutation',
  description: 'The reply for a newly created user',
  fields: {
    success: {
      type: GraphQLBoolean,
    },
  },
});

export default CreateUserType;
