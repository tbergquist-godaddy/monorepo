// @flow

import ExerciseRepository from '../ExerciseRepository';
import UserRepository from '../UserRepository';
import sequelize from '../../connection';

let userId;
let exerciseId;

beforeEach(async () => {
  const dbUser = await UserRepository.createUser({
    username: 'test_user',
    email: 'test@test.no',
    password: '123456',
  });
  if (dbUser.id != null) {
    userId = dbUser.id;
  }

  const dbExercise = await ExerciseRepository.createExercise({
    userId,
    name: 'Squat',
  });
  exerciseId = dbExercise.id;
});

afterEach(async () => {
  await sequelize.query('delete from exercises;');
  await sequelize.query('delete from users;');
});

it('gets an exercise', async () => {
  const exercise = await ExerciseRepository.getById(exerciseId);
  expect(exercise?.name).toBe('Squat');
  expect(exercise?.userId).toEqual(userId);
});
