// @flow

const path = require('path');

const sharedConfig = require('./shared-config');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  ...sharedConfig,
  testEnvironment: 'node',
  setupFilesAfterEnv: [(path.join(distPath, 'setupTestingLibrary.js') /*: string */)],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).js'],
};
