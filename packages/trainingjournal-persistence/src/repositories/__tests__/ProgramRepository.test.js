// @flow

import MockDate from 'mockdate';

import connection from '../../connection';
import ProgramRepository from '../ProgramRepository';
import UserRepository from '../UserRepository';

MockDate.set(new Date(2020, 0, 1, 0, 0, 0, 0));
let user;
let user2;
let userCount = 0;

const createUser = () => {
  return UserRepository.createUser({
    username: `løken${userCount}`,
    password: 'I_am_naive',
    email: `lol${userCount++}@lol.no`,
  });
};

const createProgram = (name, user) =>
  ProgramRepository.createProgram({
    name,
    user,
    date: new Date(),
  });

beforeEach(async () => {
  user = await createUser();
  user2 = await createUser();
});

afterEach(async () => {
  await connection.collection('users').drop();
  await connection.collection('programs').drop();
  userCount = 0;
});

it('creates a new Program', async () => {
  const program = await createProgram('My first', user.id);

  expect(program.name).toBe('My first');
  expect(program.date).toEqual(new Date(2020, 0, 1, 0, 0, 0, 0));
});

it('returns the users programs', async () => {
  const program1 = await createProgram('My first', user.id);
  const program2 = await createProgram('My second', user.id);
  await createProgram('The first', user2.id);

  const { programs, count } = await ProgramRepository.getPrograms({
    userId: user.id,
    skip: 0,
    limit: 10,
  });
  expect(programs).toHaveLength(2);
  expect(count).toBe(2);
  expect(programs[0].id).toEqual(program1.id);
  expect(programs[1].id).toEqual(program2.id);
});
