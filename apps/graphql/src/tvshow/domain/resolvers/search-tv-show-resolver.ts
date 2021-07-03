import { GraphqlContextType } from 'services/createGraphqlContext';
import { connectionFromArray } from '@adeira/graphql-relay';

import { ITvshowDTO } from '../dto/tvshow-dto';

interface Args {
  query: string;
}

export default async function searchTvshowResolver(
  _: unknown,
  args: Args,
  { tvshowService }: GraphqlContextType,
): Promise<ITvshowDTO[]> {
  const results = await tvshowService.search(args.query);
  return connectionFromArray(results, args);
}
