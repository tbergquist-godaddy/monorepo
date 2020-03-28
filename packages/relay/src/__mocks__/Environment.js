// @flow

import { createMockEnvironment } from 'relay-test-utils';

const env = createMockEnvironment();
const environment = {
  getEnvironment: (): any => {
    return env;
  },
};

export default environment;
