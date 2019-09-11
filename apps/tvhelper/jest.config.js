// @flow

module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    'react-native$': 'react-native-web',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/scripts/jest.js'],
};
