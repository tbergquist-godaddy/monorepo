// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'cross-fetch';

import { server } from './src/test-utils/server';

globalThis.fetch = fetch;

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});
