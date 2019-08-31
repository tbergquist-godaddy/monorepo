// @flow strict

import { getDataloaders as getTvhelperLoaders } from '@tbergq/graphql-tvhelper';
import type { GraphqlContextType } from '@tbergq/graphql-services';
import type { $Request } from 'express';

export default function createContext(request: $Request): GraphqlContextType {
  return {
    user: request.user,
    dataLoader: {
      tvhelper: getTvhelperLoaders(),
    },
  };
}
