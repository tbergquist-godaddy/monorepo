// @flow

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@adeira/eslint-config/next',
  ],
  rules: {
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/require-readonly-react-props': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    'relay/generated-flow-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'adeira/no-invalid-flow-annotations': 'off',
  },
};
