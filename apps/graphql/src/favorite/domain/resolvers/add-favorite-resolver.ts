import { fromGlobalId } from '@adeira/graphql-global-id';
import { GraphqlContextType } from 'services/createGraphqlContext';

import { TvShow } from '../../../tvhelper/tvshow/TvShow';

type Args = {
  serieId: string;
};
type Resolver = {
  success: boolean;
  tvShow: TvShow | null;
};
export default async function addFavoriteResolver(
  _: unknown,
  args: Args,
  { favoriteService, dataLoader, user }: GraphqlContextType,
): Promise<Resolver> {
  const serieId = fromGlobalId(args.serieId);
  const userId = user?.id;

  if (userId == null) {
    return { success: false, tvShow: null };
  }

  const [addResult, tvDetailResult] = await Promise.allSettled([
    favoriteService.addFavorite(userId, parseInt(serieId, 10)),
    dataLoader.tvhelper.tvDetail.load(serieId),
  ]);

  const isSuccess = addResult.status === 'fulfilled';
  return {
    success: addResult.status === 'fulfilled',
    tvShow: tvDetailResult.status === 'fulfilled' && isSuccess ? tvDetailResult.value : null,
  };
}
