module.exports = {
  src: './',
  schema: './schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**', '**/.next/**'],
  extensions: ['ts', 'tsx', 'js'],
  artifactDirectory: './src/__generated__',
};
