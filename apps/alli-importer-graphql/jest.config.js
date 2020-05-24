// @flow

const path = require('path');
const { findMonorepoRoot } = require('@adeira/monorepo-utils');

const setTestPath = (path.join(findMonorepoRoot(), 'scripts', 'setupTest.js') /*: string */);
const mongoTestPath = (path.join(
  findMonorepoRoot(),
  'packages',
  'alli-importer-persistence',
  'scripts',
  'mongoMemoryServer.js',
) /*: string */);

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFilesAfterEnv: [setTestPath, mongoTestPath],
};
