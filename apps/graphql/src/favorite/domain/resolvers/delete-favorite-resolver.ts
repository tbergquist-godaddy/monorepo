import { fromGlobalId } from '@adeira/graphql-global-id';
import { GraphqlContextType } from 'services/createGraphqlContext';

type Args = {
  serieId: string;
};

type Resolver = {
  success: boolean;
  id: string | null;
};

const failObject = { success: false, id: null };

export default async function deleteFavoriteResolver(
  _: unknown,
  args: Args,
  { user, favoriteService }: GraphqlContextType,
): Promise<Resolver> {
  const userId = user?.id;
  if (userId == null) {
    return failObject;
  }
  const serieId = fromGlobalId(args.serieId);
  try {
    const success = await favoriteService.deleteFavorite(userId, parseInt(serieId, 10));
    return {
      success,
      id: success ? args.serieId : null,
    };
  } catch {
    return failObject;
  }
}
