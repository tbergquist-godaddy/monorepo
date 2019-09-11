// @flow

import { createMockEnvironment } from 'relay-test-utils';

const environment = {
  getEnvironment: () => {
    return createMockEnvironment();
  },
};

export default environment;
