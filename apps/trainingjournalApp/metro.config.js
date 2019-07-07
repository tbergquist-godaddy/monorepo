// @flow

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const cwd = path.resolve(__dirname);

module.exports = {
  resolver: {
    blacklistRE: blacklist([
      /node_modules\/.*\/node_modules\/react-native\/.*/,
      /packages\/.*\/node_modules\/react-native\/.*/,
    ]),
  },
  watchFolders: [
    cwd,
    path.resolve(cwd, '../../packages'),
    path.resolve(cwd, '../../node_modules'),
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
