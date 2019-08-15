// @flow strict

import { SearchTvShowLoader } from '@tbergq/graphql-tvhelper';
import type { GraphqlContextType } from '@tbergq/graphql-services';

export default function createContext(): GraphqlContextType {
  return {
    dataLoader: {
      tvhelper: {
        searchTvShow: SearchTvShowLoader(),
      },
    },
  };
}
