// @flow

import { connectionDefinitions } from 'graphql-relay';

import Exercise from './Exercise';

const { connectionType: ExerciseConnection, edgeType } = connectionDefinitions({
  nodeType: Exercise,
});

export const ExerciseEdge = edgeType;

export default ExerciseConnection;
