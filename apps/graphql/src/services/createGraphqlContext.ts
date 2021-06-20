import type { Request } from 'express';
import type { TvHelperDataLoaders } from '../tvhelper/getDataloaders';
import getTvhelperLoaders from '../tvhelper/getDataloaders';

type LoggedInUser = any;

export type GraphqlContextType = {
  readonly user: LoggedInUser | null | undefined;
  readonly dataLoader: {
    readonly tvhelper: TvHelperDataLoaders;
  };
};
export default function createContext(request: Request): GraphqlContextType {
  return {
    user: request.user,
    dataLoader: {
      tvhelper: getTvhelperLoaders(request.user),
    },
  };
}
