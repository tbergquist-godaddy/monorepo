import type { Request } from 'express';
import { UserService, IUserService } from 'account';
import { log } from 'crosscutting';

import getTvhelperLoaders, { TvHelperDataLoaders } from '../tvhelper/getDataloaders';

type LoggedInUser = any;

export type GraphqlContextType = {
  readonly user: LoggedInUser | null | undefined;
  readonly userService: IUserService;
  readonly log: typeof log;
  readonly dataLoader: {
    readonly tvhelper: TvHelperDataLoaders;
  };
};
export default function createContext(request: Request): GraphqlContextType {
  return {
    user: request.user,
    log,
    userService: new UserService(),
    dataLoader: {
      tvhelper: getTvhelperLoaders(request.user),
    },
  };
}
