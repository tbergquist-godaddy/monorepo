// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    (path.join(__dirname, '..', '..', 'scripts', 'setupTestingLibrary.js') /*: string  */),
    (path.join(__dirname, '..', '..', 'scripts', 'setupTest.js') /*: string  */),
  ],
};
