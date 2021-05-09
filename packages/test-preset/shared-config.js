// @flow

const path = require('path');

module.exports = {
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).js'],
  timers: 'fake',
  setupFiles: [(path.join(__dirname, 'global-setup.js') /*: string */)],
};
