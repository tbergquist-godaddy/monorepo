const path = require('path');

module.exports = {
  'crosscutting': path.resolve(__dirname, 'src', 'crosscutting', 'index.ts'),
  'account': path.resolve(__dirname, 'src', 'account', 'index.ts'),
  'favorite': path.resolve(__dirname, 'src', 'favorite', 'index.ts'),
  'episode': path.resolve(__dirname, 'src', 'episode', 'index.ts'),
  'tvshow': path.resolve(__dirname, 'src', 'tvshow', 'index.ts'),
  'test/server': path.resolve(__dirname, 'src', 'test', 'server.ts'),
  'test/datasets': path.resolve(__dirname, 'src', 'test', 'datasets', 'index.ts'),
  'services/createGraphqlContext': path.resolve(
    __dirname,
    'src',
    'services',
    'createGraphqlContext.ts',
  ),
};
