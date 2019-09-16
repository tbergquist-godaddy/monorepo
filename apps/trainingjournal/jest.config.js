// @flow

module.exports = {
  moduleNameMapper: {
    'react-native$': 'react-native-web',
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/jest.js'],
};
