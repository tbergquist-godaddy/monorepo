// @flow

const path = require('path');

module.exports = {
  preset: (path.relative(
    __dirname,
    require.resolve('@tbergq/test-preset/node-preset.js'),
  ) /*: string */),
  rootDir: __dirname,
  setupFilesAfterEnv: [(path.join(__dirname, 'scripts', 'setupTest.js') /*: string */)],
};
