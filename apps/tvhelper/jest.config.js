// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    'react-native$': 'react-native-web',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    path.join(__dirname, '..', '..', 'node_modules', 'react-native-web', 'jest', 'setup.js'),
    '<rootDir>/scripts/jest.js',
  ],
};
