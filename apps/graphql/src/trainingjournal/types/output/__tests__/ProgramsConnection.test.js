// @flow

import {
  UserRepository,
  ProgramRepository,
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
  await ProgramRepository.createProgram({
    name: 'Sommerkroppen',
    user: user.id,
  });
  await ProgramRepository.createProgram({
    name: 'Pappakroppen',
    user: user.id,
  });
});

afterEach(async () => {
  await trainingJournalConnection.collection('users').drop();
  await trainingJournalConnection.collection('programs').drop();
});

it('works', async () => {
  expect(
    await executeTestQuery(
      `query {
    viewer {
      ... on TraningJournalViewer {
        programs {
          edges {
            node {
              name
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
