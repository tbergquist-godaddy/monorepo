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

it('gets exercises by userId', async () => {
  // $FlowExpectedError[incompatible-call]
  const { id } = await UserRepository.createUser({
    username: 'test_user_2',
    email: 'test2@test.no',
    password: '123456',
  });
  await ExerciseRepository.createExercise({
    userId: id,
    name: 'Squat_2',
  });

  const exercises = await ExerciseRepository.getByUserId(userId);
  expect(exercises).toHaveLength(1);
  expect(exercises[0].name).toBe('Squat');
});
