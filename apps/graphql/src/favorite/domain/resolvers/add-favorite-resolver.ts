import { fromGlobalId } from '@adeira/graphql-global-id';
import { GraphqlContextType } from 'services/createGraphqlContext';
import { ITvshowDTO } from 'tvshow/domain/dto/tvshow-dto';

type Args = {
  serieId: string;
};
type Resolver = {
  success: boolean;
  tvShow: ITvshowDTO | null;
};
export default async function addFavoriteResolver(
  _: unknown,
  args: Args,
  { favoriteService, tvshowService, user }: GraphqlContextType,
): Promise<Resolver> {
  const serieId = fromGlobalId(args.serieId);
  const userId = user?.id;

  if (userId == null) {
    return { success: false, tvShow: null };
  }

  const [addResult, tvDetailResult] = await Promise.allSettled([
    favoriteService.addFavorite(userId, parseInt(serieId, 10)),
    tvshowService.getById(parseInt(serieId, 10)),
  ]);

  const isSuccess = addResult.status === 'fulfilled' && addResult.value != null;
  return {
    success: isSuccess,
    tvShow: tvDetailResult.status === 'fulfilled' && isSuccess ? tvDetailResult.value : null,
  };
}
