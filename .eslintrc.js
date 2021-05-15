// @flow

/* eslint-disable no-unused-vars */
const OFF = 0;
const WARN = 1;
const ERROR = 2;
/* eslint-enable no-unused-vars */

module.exports = {
  root: true,
  extends: ['@adeira/eslint-config/strict'],
  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-unresolved': OFF,
    'node/file-extension-in-import': OFF,
    'react/react-in-jsx-scope': OFF,
    'flowtype/require-inexact-type': OFF,
    'no-restricted-imports': [
      ERROR,
      {
        name: 'next/link',
        message: "Please use '@tbergq/components' Link instead.",
      },
      {
        name: '@kiwicom/orbit-components',
        importNames: ['Heading', 'InputField', 'Alert', 'Stack'],
        message: "Please use '@tbergq/components' package instead.",
      },
    ],
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/scripts/*.js',
          '**/__mocks__/*.js',
          '**/*stories.js',
          '**/jest.config.js',
          '**/test/*.js',
        ],
      },
    ],
  },
};
