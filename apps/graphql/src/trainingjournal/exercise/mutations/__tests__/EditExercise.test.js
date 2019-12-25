// @flow

import {
  UserRepository,
  trainingJournalConnection,
  ExerciseRepository,
} from '@tbergq/trainingjournal-persistence';
import { toGlobalId } from '@adeira/graphql-global-id';

import executeTestQuery from '../../../../services/executeTestQuery';

let user;
let exercise;

beforeEach(async () => {
  user = await UserRepository.createUser({
    username: 'løken',
    password: 'I_am_naive',
    email: 'lol@lol.no',
  });
  exercise = await ExerciseRepository.createExercise({
    name: 'Knebøy',
    muscleGroups: 'TestLår',
    user: user.id,
  });
});
afterEach(async () => {
  await trainingJournalConnection.collection('users').drop();
  await trainingJournalConnection.collection('exercises').drop();
});

it('edits an exercise', async () => {
  expect(
    await executeTestQuery(
      `mutation editMutation($exercise: CreateExerciseInput!, $exerciseId: ID!) {
        editExercise(exercise: $exercise, exerciseId: $exerciseId) {
          exerciseEdge {
            node {
              name
              muscleGroups
            }
          }
        }
      }`,
      {
        exercise: { name: 'Knebøy edited', muscleGroups: 'TestLår edited' },
        exerciseId: toGlobalId('Exercise', exercise.id),
      },
      { user: { app: 'trainingjournal', id: user.id } },
    ),
  ).toMatchSnapshot();
});
