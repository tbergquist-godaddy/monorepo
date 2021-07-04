import { GraphqlContextType } from 'services/createGraphqlContext';
import * as R from 'ramda';
import { connectionFromArray } from '@adeira/graphql-relay';

type SortBy =
  | 'name'
  | '_embedded.nextepisode.airdate'
  | '_embedded.previousepisode.airdate'
  | 'status';
type Args = {
  options: {
    sortDirection: 'ascending' | 'descending';
    sortBy: SortBy;
  };
  after: string;
  first: number;
  before: string;
  last: number;
};

type ConnectionType = any; // TODO

export default async function favoritesResolver(
  _: unknown,
  args: Args,
  { user, tvshowService, favoriteService }: GraphqlContextType,
): Promise<ConnectionType> {
  const userId = user?.id ?? '';
  const savedFavorites = await favoriteService.getFavorites(userId);
  const serieIds = savedFavorites.map((item) => item.serieId);
  const favorites = await tvshowService.getByIds(serieIds);

  const sortBy =
    args.options.sortDirection === 'ascending'
      ? R.ascend(R.path(args.options.sortBy.split('.')))
      : R.descend(R.path(args.options.sortBy.split('.')));

  return connectionFromArray(R.sort(sortBy, favorites), args);
}
