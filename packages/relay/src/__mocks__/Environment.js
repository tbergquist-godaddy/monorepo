// @flow

import { createMockEnvironment } from 'relay-test-utils';

const env = createMockEnvironment();
const environment = {
  getEnvironment: () => {
    return env;
  },
};

export default environment;
