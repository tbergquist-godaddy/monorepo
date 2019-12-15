// @flow

import {
  UserRepository,
  ExerciseRepository,
  trainingJournalConnection,
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
  exercise = await ExerciseRepository.createExercise({ name: 'test', user: user.id });
});
afterEach(async () => {
  await trainingJournalConnection.collection('users').drop();
  await trainingJournalConnection.collection('exercises').drop();
});

it('deletes an exercise', async () => {
  expect(
    await executeTestQuery(
      `mutation deleteExercise($id: ID!) {
        deleteExercise(id: $id) {
          success
        }
      }`,
      { id: toGlobalId('Exercise', exercise.id) },
      { user: { app: 'trainingjournal', id: user.id } },
    ),
  ).toMatchSnapshot();
});
