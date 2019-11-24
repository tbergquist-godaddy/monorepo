// @flow strict

import { Schema } from 'mongoose';

import connection from '../connection';

export type ExerciseType = {|
  +_id: string,
  +name: string,
  +videoUrl?: string,
  +description?: string,
  +muscleGroups?: string,
  +user: string,
|};

const ExerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  muscleGroups: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

const Exercise = connection.model('exercises', ExerciseSchema);

export default Exercise;
