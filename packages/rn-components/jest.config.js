// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    'react-native$': 'react-native-web',
  },
  setupFilesAfterEnv: [
    path.join(__dirname, '..', '..', 'node_modules', 'react-native-web', 'jest', 'setup.js'),
  ],
  testEnvironment: 'jsdom',
};
