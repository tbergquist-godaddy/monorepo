// @flow strict

import { Types } from 'mongoose';

import Model, { type ExerciseType } from '../models/ExerciseModel';
import Exercise from '../dataObjects/Exercise';

type CreateExerciseInput = $ReadOnly<$Diff<ExerciseType, {| +_id: string |}>>;

const toObjectId = (id: string) => {
  // $FlowFixMe: Cannot call Types.ObjectId because a call signature declaring the expected parameter / return type is missing in statics of bson$ObjectId
  return Types.ObjectId(id);
};
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

  static async paginateExercises({
    userId,
    skip,
    limit,
  }: {|
    +userId: string,
    skip: number,
    limit: number,
  |}) {
    const aggregate = await Model.aggregate([
      {
        $match: { user: toObjectId(userId) },
      },
      {
        $sort: { name: 1 },
      },
      {
        $facet: {
          exercises: [{ $skip: skip }, { $limit: limit }],
          count: [{ $count: 'total' }],
        },
      },
      {
        $unwind: '$count',
      },
      {
        $project: {
          count: '$count.total',
          exercises: '$exercises',
        },
      },
    ]).exec();

    const { count, exercises } = aggregate[0];

    return {
      count,
      exercises: exercises.map(exercise => new Exercise(exercise)),
    };
  }

  static async deleteExercise(userId: string, exerciseId: string) {
    const response = await Model.deleteOne({ user: userId, _id: toObjectId(exerciseId) });

    return response.deletedCount === 1;
  }

  static async editExercise(userId: string, exerciseId: string, exercise: $Shape<ExerciseType>) {
    const doc = await Model.updateOne(
      { user: toObjectId(userId), _id: toObjectId(exerciseId) },
      exercise,
    );

    if (doc.nModified === 1) {
      return new Exercise(await Model.findById(toObjectId(exerciseId)));
    }
    return null;
  }
}
