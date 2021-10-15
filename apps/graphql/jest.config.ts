export default {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/scripts/setup-test-env.ts'],
  setupFilesAfterEnv: ['<rootDir>/scripts/setup-jest.ts'],
};
