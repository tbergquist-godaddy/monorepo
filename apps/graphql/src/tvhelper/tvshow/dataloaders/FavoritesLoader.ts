import DataLoader from 'dataloader';

type FavoriteType = any;

const fetchFavorites = async (userIds: ReadonlyArray<string>, repository: any) => {
  const responses = await repository.getFavorites(userIds);
  return userIds.map((userId) => responses.filter((response: any) => response.userId === userId));
};

const FavoritesLoader = (repository: any): DataLoader<string, Array<FavoriteType>, string> =>
  new DataLoader<string, FavoriteType[]>((userIds: ReadonlyArray<string>) =>
    fetchFavorites(userIds, repository),
  );

export default FavoritesLoader;
