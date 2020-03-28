// @flow

const path = require('path');

module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    (path.join(__dirname, '..', '..', 'scripts', 'setupTest.js') /*: string */),
    (path.join(__dirname, '..', '..', 'scripts', 'mongoMemoryServer.js') /*: string */),
    (path.join(__dirname, 'scripts', 'setupTests.js') /*: string */),
  ],
};
