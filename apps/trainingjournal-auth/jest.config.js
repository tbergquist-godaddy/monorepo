// @flow

const path = require('path');

module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    path.join(__dirname, '..', '..', 'scripts', 'setupTest.js'),
    path.join(__dirname, 'scripts', 'setupTest.js'),
  ],
};
