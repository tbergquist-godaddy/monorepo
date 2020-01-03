// @flow

import { connectionDefinitions } from 'graphql-relay';

import Program from './Program';

const { connectionType: ProgramConnection, edgeType } = connectionDefinitions({
  nodeType: Program,
});

export const ProgramEdge = edgeType;

export default ProgramConnection;
