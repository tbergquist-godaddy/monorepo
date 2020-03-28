// @flow

import { connectionDefinitions } from 'graphql-relay';
import type { GraphQLConnectionDefinitions } from '@tbergq/graphql-services';

import Program from './Program';

const { connectionType: ProgramConnection, edgeType } = (connectionDefinitions({
  nodeType: Program,
}): GraphQLConnectionDefinitions);

export const ProgramEdge = edgeType;

export default ProgramConnection;
