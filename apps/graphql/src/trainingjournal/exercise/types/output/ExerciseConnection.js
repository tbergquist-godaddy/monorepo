// @flow

import { connectionDefinitions } from 'graphql-relay';

import Exercise from './Exercise';

const { connectionType: ExerciseConnection } = connectionDefinitions({
  nodeType: Exercise,
});

export default ExerciseConnection;
