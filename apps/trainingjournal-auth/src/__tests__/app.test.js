// @flow

import request from 'supertest';

import app from '../app';
import connection from '../db/connection';

describe('POST/users', () => {
  afterEach(async () => {
    await connection.collection('users').drop();
  });
  it('responds with json', done => {
    request(app)
      .post('/api/users')
      .send(
        JSON.stringify({ username: 'don_tito', password: 'pa$$word', email: 'don@tito.bonito' }),
      )
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  });
});
