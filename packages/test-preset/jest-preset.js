// @flow

const path = require('path');

const sharedConfig = require('./shared-config');

const distPath = path.join(__dirname, 'dist');

module.exports = {
  ...sharedConfig,
  setupFilesAfterEnv: [(path.join(distPath, 'setupTestingLibrary.js') /*: string */)],
  testEnvironment: 'jsdom',
};
