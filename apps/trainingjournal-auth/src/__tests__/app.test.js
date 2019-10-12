// @flow

import request from 'supertest';

import app from '../app';
import connection from '../db/connection';
import UserModel from '../db/models/UserModel';

describe('POST/users', () => {
  beforeEach(async () => {
    await UserModel.createIndexes();
  });
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

  it('returns 422 on missing username', done => {
    request(app)
      .post('/api/users')
      .send(JSON.stringify({ password: 'pa$$word', email: 'don@tito.bonito' }))
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, { error: 'Missing required input field username' }, done);
  });

  it('returns 422 on missing password', done => {
    request(app)
      .post('/api/users')
      .send(JSON.stringify({ username: 'don_tito', email: 'don@tito.bonito' }))
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, { error: 'Missing required input field password' }, done);
  });

  it('returns 422 on missing email', done => {
    request(app)
      .post('/api/users')
      .send(JSON.stringify({ username: 'don_tito', password: 'pa$$word' }))
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, { error: 'Missing required input field email' }, done);
  });

  it('fails when username exists', async done => {
    await request(app)
      .post('/api/users')
      .send(
        JSON.stringify({ username: 'don_tito', password: 'pa$$word', email: 'don@tito.bonito' }),
      )
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    request(app)
      .post('/api/users')
      .send(
        JSON.stringify({ username: 'don_tito', password: 'pa$$word', email: 'don@tito.bonito' }),
      )
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, { error: 'E11000 duplicate key error dup key: { : "don_tito" }' }, done);
  });

  it('fails when email exists', async done => {
    await request(app)
      .post('/api/users')
      .send(
        JSON.stringify({ username: 'don_tito', password: 'pa$$word', email: 'don@tito.bonito' }),
      )
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    request(app)
      .post('/api/users')
      .send(
        JSON.stringify({ username: 'don_tito2', password: 'pa$$word', email: 'don@tito.bonito' }),
      )
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        400,
        {
          error: 'E11000 duplicate key error dup key: { : "don@tito.bonito" }',
        },
        done,
      );
  });
});
