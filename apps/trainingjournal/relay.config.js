// @flow strict

const path = require('path');

module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: '.',
  schema: (path.join(__dirname, '..', 'trainingjournal-graphql', 'schema.graphql') /*: string */),
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};
