// @flow strict

import type { GraphqlContextType } from '@tbergq/graphql-services';
import type { $Request } from 'express';

import getTvhelperLoaders from '../tvhelper/getDataloaders';

export default function createContext(request: $Request): GraphqlContextType {
  return {
    user: request.user,
    dataLoader: {
      tvhelper: getTvhelperLoaders(request.user),
    },
  };
}
