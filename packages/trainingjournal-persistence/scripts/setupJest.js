// @flow

import connection from '../src/connection';
import User from '../src/models/User';

beforeAll(async () => {
  await User.sync();
});

afterAll(() => connection.close());
