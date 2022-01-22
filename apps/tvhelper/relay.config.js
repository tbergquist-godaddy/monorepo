module.exports = {
  src: './',
  schema: './schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**', '**/.next/**'],
  artifactDirectory: './src/__generated__',
  language: 'typescript',
};
