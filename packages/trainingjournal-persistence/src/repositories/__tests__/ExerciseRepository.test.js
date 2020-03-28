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

  it('deletes an excercise', async () => {
    const exercise = await ExerciseRepository.createExercise({
      name: 'Benkpress',
      muscleGroups: 'Bryst',
      user: user.id,
    });

    expect(await ExerciseRepository.deleteExercise(user.id, exercise.id)).toBe(true);
  });

  it('deletes updates excercise', async () => {
    const exercise = await ExerciseRepository.createExercise({
      name: 'Benkpress',
      muscleGroups: 'Bryst',
      user: user.id,
    });

    const updated = await ExerciseRepository.editExercise(user.id, exercise.id, {
      name: 'Benkpress edited',
    });

    expect(updated?.name).toEqual('Benkpress edited');
    expect(updated?.muscleGroups).toEqual('Bryst');
  });

  it('returns null if user does not own exercise', async () => {
    const exercise = await ExerciseRepository.createExercise({
      name: 'Benkpress',
      muscleGroups: 'Bryst',
      user: user.id,
    });
    const fakeUser = await UserRepository.createUser({
      username: 'fake',
      password: 'I_am_naive',
      email: 'lol2@lol.no',
    });

    const updated = await ExerciseRepository.editExercise(fakeUser.id, exercise.id, {
      name: 'Benkpress edited',
    });

    expect(updated).toBeNull();
  });

  it('returns paginated exercises', async () => {
    await ExerciseRepository.createExercise({
      name: 'Benkpress',
      muscleGroups: 'Bryst',
      user: user.id,
    });
    await ExerciseRepository.createExercise({
      name: 'Hangups',
      muscleGroups: 'Bryst',
      user: user.id,
    });

    // $FlowFixMe
    const paginated = await ExerciseRepository.paginateExercises({
      userId: user.id,
      skip: 1,
      limit: 1,
    });
    delete paginated.exercises[0].id;
    delete paginated.exercises[0].userId;
    expect(paginated).toMatchInlineSnapshot(`
      Object {
        "count": 2,
        "exercises": Array [
          Exercise {
            "description": undefined,
            "muscleGroups": "Bryst",
            "name": "Hangups",
            "videoUrl": undefined,
          },
        ],
      }
    `);
  });
});
