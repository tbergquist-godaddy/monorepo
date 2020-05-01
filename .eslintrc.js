// @flow

const OFF = 0;
const WARN = 1;
const ERROR = 2;

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
    'flowtype/require-inexact-type': OFF,
    'no-restricted-imports': [
      ERROR,
      {
        name: 'next/link',
        message: "Please use '@tbergq/components' Link instead.",
      },
      {
        name: '@kiwicom/orbit-components',
        importNames: ['Heading', 'InputField'],
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
        ],
      },
    ],
  },
};
