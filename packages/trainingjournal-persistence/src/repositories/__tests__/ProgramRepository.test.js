// @flow

import MockDate from 'mockdate';

import connection from '../../connection';
import ProgramRepository from '../ProgramRepository';
import UserRepository from '../UserRepository';

MockDate.set(new Date(2020, 0, 1, 0, 0, 0, 0));
let user;

beforeEach(async () => {
  user = await UserRepository.createUser({
    username: 'løken',
    password: 'I_am_naive',
    email: 'lol@lol.no',
  });
});

afterEach(async () => {
  await connection.collection('users').drop();
  await connection.collection('programs').drop();
});

it('creates a new Program', async () => {
  const program = await ProgramRepository.createProgram({
    name: 'My first',
    user: user.id,
    date: new Date(),
  });
  expect(program.name).toBe('My first');
  expect(program.date).toEqual(new Date(2020, 0, 1, 0, 0, 0, 0));
});
