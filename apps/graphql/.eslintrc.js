module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'ft-flow/require-valid-file-annotation': 'off',
    'ft-flow/require-readonly-react-props': 'off',
    'ft-flow/no-types-missing-file-annotation': 'off',
    'relay/generated-flow-types': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description' },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'adeira/no-invalid-flow-annotations': 'off',
    'testing-library/prefer-explicit-assert': 'off',
  },
};
