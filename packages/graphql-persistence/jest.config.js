// @flow

const path = require('path');

const setTestPath = (path.join(__dirname, '..', '..', 'scripts', 'setupTest.js') /*:: : string */);
const mongoTestPath = (path.join(
  __dirname,
  '..',
  '..',
  'scripts',
  'mongoMemoryServer.js',
) /*:: : string */);

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFilesAfterEnv: [setTestPath, mongoTestPath],
};
