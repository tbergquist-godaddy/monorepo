// @flow strict

import { getDataloaders as getTvhelperLoaders } from '@tbergq/graphql-tvhelper';
import type { GraphqlContextType } from '@tbergq/graphql-services';

export default function createContext(): GraphqlContextType {
  return {
    dataLoader: {
      tvhelper: getTvhelperLoaders(),
    },
  };
}
