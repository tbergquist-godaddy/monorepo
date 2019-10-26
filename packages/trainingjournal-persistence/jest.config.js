// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    path.join(__dirname, '..', '..', 'scripts', 'setupTest.js'),
    path.join(__dirname, '..', '..', 'scripts', 'mongoMemoryServer.js'),
  ],
};
