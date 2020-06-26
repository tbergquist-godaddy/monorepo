// @flow

import Exercise from '../models/Exercise';

type CreateExerciseInput = {
  +userId: number,
  +name: string,
  +description?: string,
};
class ExerciseRepository {
  model: typeof Exercise;

  constructor(model: typeof Exercise) {
    this.model = model;
  }

  createExercise(input: CreateExerciseInput): Promise<Exercise> {
    return this.model.create(input);
  }

  getById(id: number): Promise<?Exercise> {
    return this.model.findByPk(id);
  }

  getByUserId(userId: number): Promise<$ReadOnlyArray<Exercise>> {
    return this.model.findAll({ where: { userId } });
  }
}

const exerciseRepository: ExerciseRepository = new ExerciseRepository(Exercise);

export default exerciseRepository;
