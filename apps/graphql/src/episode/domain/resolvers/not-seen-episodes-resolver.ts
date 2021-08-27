import { GraphqlContextType } from 'services/createGraphqlContext';
import { connectionFromArray } from '@adeira/graphql-relay';

type Resolver = any;

type Args = {
  [key: string]: unknown;
};

export default async function notSeenEpisodeResolver(
  _: unknown,
  args: Args,
  { user, episodeService }: GraphqlContextType,
): Promise<Resolver> {
  const episodes = await episodeService.getNotSeenEpisodes(user.id);
  return connectionFromArray(episodes, args);
}
