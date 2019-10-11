// @flow

import request from 'supertest';

import app from '../app';

describe('POST/users', () => {
  it('responds with json', done => {
    request(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  });
});
