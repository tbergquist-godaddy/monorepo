// @flow

import { connectionDefinitions } from 'graphql-relay';
import type { GraphQLConnectionDefinitions } from '@tbergq/graphql-services';

import Exercise from './Exercise';

const { connectionType: ExerciseConnection, edgeType } = (connectionDefinitions({
  nodeType: Exercise,
}): GraphQLConnectionDefinitions);

export const ExerciseEdge = edgeType;

export default ExerciseConnection;
