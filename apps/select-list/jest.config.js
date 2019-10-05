// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    '\\.css$': path.join(__dirname, '..', '..', 'mocks', 'fileMock.js'),
  },
  testEnvironment: 'jsdom',
};
