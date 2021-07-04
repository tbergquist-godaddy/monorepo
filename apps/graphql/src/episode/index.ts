export { default as WatchedEpisodeService } from './domain/watched-episode-service';
export type { IWatchedEpisodeService } from './domain/watched-episode-service';

export { default as EpisodesService } from './domain/episode-service';
export type { IEpisodeService } from './domain/episode-service';
export type { IEpisodeDTO } from './domain/dto/episode-dto';

export { default as markAsWatchedResolver } from './domain/resolvers/mark-as-watched-resolver';
export { default as deleteWatchedResolver } from './domain/resolvers/delete-watched-resolver';
export { default as isEpisodeWatchedResolver } from './domain/resolvers/is-episode-watched-resolver';
