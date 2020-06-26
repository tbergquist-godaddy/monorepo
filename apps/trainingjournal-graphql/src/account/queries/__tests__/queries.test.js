// @flow

import { UserRepository, ExerciseRepository } from '@tbergq/trainingjournal-persistence';
import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';
import Mockdate from 'mockdate';

import executeTestQuery from '../../../services/executeTestQuery';

Mockdate.set(new Date(2020, 0, 1, 0, 0, 0, 0));

let userId;
beforeEach(async () => {
  // $FlowExpectedError[incompatible-call]
  const { id } = await UserRepository.createUser({
    username: 'tita',
    password: 'password',
    email: 'tita@bebita.com',
  });
  userId = id;
  await ExerciseRepository.createExercise({
    userId: id,
    name: 'Squat',
  });
  await ExerciseRepository.createExercise({
    userId: id,
    name: 'Bench press',
  });
});

generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), (input) => {
  return executeTestQuery(input, null, { user: { id: userId } });
});
