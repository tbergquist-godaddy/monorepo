import type { Request } from 'express';
import { UserService, IUserService } from 'account';
import { FavoriteService, IFavoriteService } from 'favorite';
import {
  WatchedEpisodeService,
  IWatchedEpisodeService,
  IEpisodeService,
  EpisodesService,
} from 'episode';
import { log } from 'crosscutting';
import { TvshowService, ITvshowService } from 'tvshow';
import { StoredOperationService, IStoredOperationService } from 'stored-operation';

type LoggedInUser = any;

export type GraphqlContextType = {
  readonly user: LoggedInUser | null | undefined;
  readonly userService: IUserService;
  readonly favoriteService: IFavoriteService;
  readonly watchedEpisodeService: IWatchedEpisodeService;
  readonly tvshowService: ITvshowService;
  readonly episodeService: IEpisodeService;
  readonly storedOperationService: IStoredOperationService;
  readonly log: typeof log;
};

export default function createContext(request: Request): GraphqlContextType {
  // @ts-ignore: request.user does exist
  const watchedEpisodeService = new WatchedEpisodeService(request.user?.id ?? '');
  const favoriteService = new FavoriteService();
  const episodeService = new EpisodesService({
    favoriteService,
    watchedEpisodeService,
  });
  return {
    user: request.user,
    log,
    userService: new UserService(),
    favoriteService,
    watchedEpisodeService,
    tvshowService: new TvshowService(episodeService),
    episodeService,
    storedOperationService: new StoredOperationService(),
  };
}
