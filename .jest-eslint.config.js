// @flow

module.exports = {
  displayName: 'lint',
  runner: '@adeira/eslint-config/runner',
  testMatch: [
    '<rootDir>/apps/**/*.js',
    '<rootDir>/packages/**/*.js',
    '<rootDir>/scripts/**/*.js',
    '<rootDir>/flow-typed/**/*.js',
  ],
};
