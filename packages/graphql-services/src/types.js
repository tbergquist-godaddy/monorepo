// @flow strict

import type { GraphQLObjectType } from 'graphql';

export type GraphQLConnectionDefinitions = {
  edgeType: GraphQLObjectType,
  connectionType: GraphQLObjectType,
  ...
};
