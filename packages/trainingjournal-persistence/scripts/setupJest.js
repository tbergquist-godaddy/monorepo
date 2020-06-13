// @flow

import connection from '../src/connection';

afterAll(() => connection.close());
