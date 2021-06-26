import type { Request } from 'express';
import { UserService, IUserService } from 'account';
import { FavoriteService, IFavoriteService } from 'favorite';
import { WatchedEpisodeService, IWatchedEpisodeService } from 'episode';
import { log } from 'crosscutting';

import getTvhelperLoaders, { TvHelperDataLoaders } from '../tvhelper/getDataloaders';

type LoggedInUser = any;

export type GraphqlContextType = {
  readonly user: LoggedInUser | null | undefined;
  readonly userService: IUserService;
  readonly favoriteService: IFavoriteService;
  readonly watchedEpisodeService: IWatchedEpisodeService;
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
    favoriteService: new FavoriteService(),
    // @ts-ignore: It does exist
    watchedEpisodeService: new WatchedEpisodeService(request.user?.id ?? ''),
    dataLoader: {
      tvhelper: getTvhelperLoaders(),
    },
  };
}
