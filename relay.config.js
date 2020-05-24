// @flow strict

module.exports = {
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './apps',
  schema: './schema.graphql',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    '**/alli-importer/**',
    '**/alli-importer-graphql/**',
  ],
};
