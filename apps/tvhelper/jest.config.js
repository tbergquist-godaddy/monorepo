// @flow

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/scripts/testEnv.js'],
  setupFilesAfterEnv: [
    '<rootDir>/scripts/setupTestingLibrary.js',
    '<rootDir>/scripts/setupTest.js',
  ],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).{ts,tsx}'],
  moduleNameMapper: {
    '^commands/(.*)': '<rootDir>/src/commands/$1',
  },
};
