// @flow

import { generateTestsFromFixtures } from '@kiwicom/test-utils';

import tvshow from '../../datasets/tvshow.json';
import executeTestQuery from '../../../executeTestQuery';

const context = {
  dataLoader: {
    tvhelper: {
      searchTvShow: {
        load: () => Promise.resolve([tvshow]),
      },
    },
  },
};

generateTestsFromFixtures(`${__dirname}/__fixtures__`, input =>
  executeTestQuery(input, null, context),
);
