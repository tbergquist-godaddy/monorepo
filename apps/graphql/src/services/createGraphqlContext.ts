import type { Request } from 'express';
import type { TvHelperDataLoaders } from '../tvhelper/getDataloaders';
import getTvhelperLoaders from '../tvhelper/getDataloaders';
import { UserService, IUserService } from '../account';
import { log } from '../crosscutting';

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
