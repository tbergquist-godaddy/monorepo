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
  await trainingJournalConnection.collection('programs').drop();
});

it('creates a program', async () => {
  expect(
    await executeTestQuery(
      `mutation programMutation($program: CreateProgramInput!) {
        createProgram(program: $program) {
          programEdge {
            node {
              name
            }
          }
        }
      }`,
      { program: { name: 'Oppkjøring' } },
      { user: { app: 'trainingjournal', id: user.id } },
    ),
  ).toMatchSnapshot();
});
