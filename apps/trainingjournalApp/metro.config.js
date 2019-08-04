// @flow

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const cwd = path.resolve(__dirname);

module.exports = {
  watchFolders: [
    cwd,
    path.resolve(cwd, '..', '..', 'packages'),
    path.resolve(cwd, '..', '..', 'node_modules'),
    path.resolve(cwd, '..', '..', 'apps', 'trainingjournal-core'),
  ],
  transformer: {
    // eslint-disable-next-line require-await
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
