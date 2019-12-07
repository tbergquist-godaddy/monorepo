// @flow

import { UserRepository, trainingJournalConnection } from '@tbergq/trainingjournal-persistence';

import executeTestQuery from '../../../../services/executeTestQuery';

let user;

beforeEach(async () => {
  user = await UserRepository.createUser({
    username: 'løken',
    password: 'I_am_naive',
    email: 'lol@lol.no',
  });
});
afterEach(async () => {
  await trainingJournalConnection.collection('users').drop();
  await trainingJournalConnection.collection('exercises').drop();
});

it('creates an exercise', async () => {
  expect(
    await executeTestQuery(
      `mutation exerciseMutation($exercise: CreateExerciseInput!) {
        createExercise(exercise: $exercise) {
          exerciseEdge {
            node {
              name
              muscleGroups
            }
          }
        }
      }`,
      { exercise: { name: 'Knebøy', muscleGroups: 'TestLår' } },
      { user: { app: 'trainingjournal', id: user.id } },
    ),
  ).toMatchSnapshot();
});
