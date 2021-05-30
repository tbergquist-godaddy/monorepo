// @flow

/* eslint-disable no-unused-vars */
const OFF = 0;
const WARN = 1;
const ERROR = 2;
/* eslint-enable no-unused-vars */

module.exports = {
  root: true,
  extends: ['@adeira/eslint-config/strict'],
  plugins: ['@typescript-eslint'],
  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/require-readonly-react-props': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    'strict': OFF,
    'import/no-unresolved': OFF,
    'node/file-extension-in-import': OFF,
    'react/react-in-jsx-scope': OFF,
    'flowtype/require-inexact-type': OFF,
    'import/extensions': [ERROR, 'never', { json: 'always', graphql: 'always', css: 'always' }],
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: [
          '**/*.test.{js,ts,tsx}',
          '**/*.spec.js',
          '**/scripts/*.js',
          '**/__mocks__/*.js',
          '**/*.stories.{js,ts,tsx}',
          '**/jest.config.js',
          '**/test/*.js',
          '**/next.config.js',
          '**/es-build.js',
        ],
      },
    ],
  },
};
