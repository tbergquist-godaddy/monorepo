// @flow strict

import Model, { type ExerciseType } from '../models/ExerciseModel';
import Exercise from '../dataObjects/Exercise';
import { toObjectId } from './utils';

type CreateExerciseInput = $ReadOnly<$Diff<ExerciseType, {| +_id: string |}>>;

export default class ExerciseRepository {
  static async createExercise(input: CreateExerciseInput): Promise<Exercise> {
    const exercise = await Model.create(input);
    return new Exercise(exercise);
  }

  static async getExercise(id: string): Promise<Exercise> {
    const exercise = await Model.findById(id);
    return new Exercise(exercise);
  }

  static async getExercises(userId: string): Promise<Exercise[]> {
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
  |}): Promise<{ +count: number, +exercises: Exercise[] }> {
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

  static async deleteExercise(userId: string, exerciseId: string): Promise<boolean> {
    const response = await Model.deleteOne({ user: userId, _id: toObjectId(exerciseId) });

    return response.deletedCount === 1;
  }

  static async editExercise(
    userId: string,
    exerciseId: string,
    exercise: $Shape<ExerciseType>,
  ): Promise<Exercise | null> {
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
