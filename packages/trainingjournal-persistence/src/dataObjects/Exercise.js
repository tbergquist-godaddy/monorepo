// @flow

import type { ExerciseType } from '../models/ExerciseModel';

export default class Exercise {
  id: string;
  name: string;
  videoUrl: ?string;
  description: ?string;
  muscleGroups: ?string;
  userId: string;

  constructor(exercise: ExerciseType) {
    this.id = exercise._id.toString();
    this.name = exercise.name;
    this.videoUrl = exercise.videoUrl;
    this.description = exercise.description;
    this.muscleGroups = exercise.muscleGroups;
    this.userId = exercise.user.toString();
  }
}
