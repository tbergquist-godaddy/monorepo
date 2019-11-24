// @flow strict

import connection from '../../connection';
import ExerciseRepository from '../ExerciseRepository';
import UserRepository from '../UserRepository';

let user;

describe('ExerciseRepository', () => {
  beforeEach(async () => {
    user = await UserRepository.createUser({
      username: 'løken',
      password: 'I_am_naive',
      email: 'lol@lol.no',
    });
  });
  afterEach(async () => {
    await connection.collection('users').drop();
    await connection.collection('exercises').drop();
  });

  it('creates an exercise and gets it', async () => {
    const exercise = await ExerciseRepository.createExercise({
      name: 'Benkpress',
      muscleGroups: 'Bryst',
      user: user.id,
    });
    expect(exercise.id).toBeDefined();
    const { name, muscleGroups, userId } = await ExerciseRepository.getExercise(exercise.id);
    expect(name).toBe('Benkpress');
    expect(muscleGroups).toBe('Bryst');
    expect(userId).toBe(user.id);
  });
});
