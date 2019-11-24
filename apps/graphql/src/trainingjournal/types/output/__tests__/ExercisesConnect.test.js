// @flow

import {
  UserRepository,
  ExerciseRepository,
  trainingJournalConnection,
} from '@tbergq/trainingjournal-persistence';

import executeTestQuery from '../../../../services/executeTestQuery';

let user;

beforeEach(async () => {
  user = await UserRepository.createUser({
    username: 'løken',
    password: 'I_am_naive',
    email: 'lol@lol.no',
  });
  await ExerciseRepository.createExercise({
    name: 'Benkpress',
    muscleGroups: 'Bryst',
    user: user.id,
  });
  await ExerciseRepository.createExercise({
    name: 'Knebøy',
    muscleGroups: 'Lår',
    user: user.id,
  });
});

afterEach(async () => {
  await trainingJournalConnection.collection('users').drop();
  await trainingJournalConnection.collection('exercises').drop();
});

it('works', async () => {
  expect(
    await executeTestQuery(
      `query {
    viewer {
      ... on TraningJournalViewer {
        exercises {
          edges {
            node {
              name
              description
              videoUrl
              muscleGroups
            }
          }
        }
      }
    }
  }`,
      {},
      { user: { app: 'trainingjournal', id: user.id } },
    ),
  ).toMatchSnapshot();
});
