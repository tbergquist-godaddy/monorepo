// @flow strict

import { Types } from 'mongoose';

import Model, { type ExerciseType } from '../models/ExerciseModel';
import Exercise from '../dataObjects/Exercise';

type CreateExerciseInput = $ReadOnly<$Diff<ExerciseType, {| +_id: string |}>>;

export default class ExerciseRepository {
  static async createExercise(input: CreateExerciseInput) {
    const exercise = await Model.create(input);
    return new Exercise(exercise);
  }

  static async getExercise(id: string) {
    const exercise = await Model.findById(id);
    return new Exercise(exercise);
  }

  static async getExercises(userId: string) {
    const exercises = await Model.find({ user: userId });
    return exercises.map(exercise => new Exercise(exercise));
  }

  static async deleteExercise(userId: string, exerciseId: string) {
    // $FlowFixMe: Cannot call Types.ObjectId because a call signature declaring the expected parameter / return type is missing in statics of bson$ObjectId
    const response = await Model.deleteOne({ user: userId, _id: Types.ObjectId(exerciseId) });

    return response.deletedCount === 1;
  }
}
