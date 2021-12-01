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

  const path = R.path<Date | string>(args.options.sortBy.split('.'));

  // @ts-ignore: Type 'string | Date | undefined' is not assignable to type 'Ord'
  const sortBy = args.options.sortDirection === 'ascending' ? R.ascend(path) : R.descend(path);
  // @ts-ignore: Type 'number' is not assignable to type '(a: ITvshowDTO | null, b: ITvshowDTO | null) => number
  return connectionFromArray(R.sort(sortBy, favorites), args);
}
