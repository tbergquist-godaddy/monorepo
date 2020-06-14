// @flow

const path = require('path');
const { findMonorepoRoot } = require('@adeira/monorepo-utils');

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFilesAfterEnv: ([
    path.join(__dirname, 'scripts', 'setupJest.js'),
    path.join(findMonorepoRoot(), 'scripts', 'setupTrainingjournalTests.js'),
  ] /*: string[] */),
};
