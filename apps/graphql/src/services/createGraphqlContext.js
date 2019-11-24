// @flow

import type { LoggedInUser } from '@tbergq/graphql-services';
import type { $Request } from 'express';

import getTvhelperLoaders, { type TvHelperDataLoaders } from '../tvhelper/getDataloaders';

export type GraphqlContextType = {|
  +user: ?LoggedInUser,
  +dataLoader: {|
    +tvhelper: TvHelperDataLoaders,
  |},
|};

export default function createContext(request: $Request): GraphqlContextType {
  return {
    user: request.user,
    dataLoader: {
      tvhelper: getTvhelperLoaders(request.user),
    },
  };
}
