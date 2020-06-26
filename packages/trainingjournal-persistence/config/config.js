// @flow

const { CLEARDB_DATABASE_URL } = process.env;

const match = (CLEARDB_DATABASE_URL ?? '').match(
  /mysql:\/\/(?<username>.*):(?<password>.*)@(?<host>.*)\/(?<db>.*)\?/,
);
module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'Trainingjournal',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'Trainingjournal_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: (match?.groups?.username /*: ?string */),
    password: (match?.groups?.password /*: ?string */),
    database: (match?.groups?.db /*: ?string */),
    host: (match?.groups?.host /*: ?string */),
    dialect: 'mysql',
  },
};
