import { invariant } from '@adeira/js';
import { Episode } from 'tvhelper/episode/Episode';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';

type DataLoader = Pick<GraphqlContextType, 'dataLoader'>;

export const resolvePreviousEpisode = async (
  dataLoader: DataLoader,
  id: number,
): Promise<null | Date> => {
  // @ts-ignore: Well, this is defined
  const episodes = await dataLoader.tvhelper.episodes.load(id.toString());
  invariant(Array.isArray(episodes), 'Expected episodes to be of type array.');

  const today = new Date();
  const tomorrow = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + 1));

  const dates = episodes.reduce((acc: ReadonlyArray<Date>, curr: Episode) => {
    if (curr.airdate == null) {
      return acc;
    }
    const airdate = new Date(curr.airdate);
    if (airdate < tomorrow) {
      return [...acc, airdate];
    }
    return acc;
  }, []);

  const date = dates.length > 0 ? new Date(Math.max(...dates)) : null;

  return date;
};

export const resolveNextEpisode = async (
  dataLoader: DataLoader,
  id: number,
): Promise<null | Date> => {
  // @ts-ignore: Well, this is defined
  const episodes = await dataLoader.tvhelper.episodes.load(id.toString());

  const today = new Date();
  const utcToday = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
  const dates = episodes.reduce((acc: ReadonlyArray<Date>, curr: Episode) => {
    if (curr.airdate == null) {
      return acc;
    }
    const airdate = new Date(curr.airdate);

    if (airdate >= utcToday) {
      return [...acc, airdate];
    }
    return acc;
  }, []);

  const date = dates.length > 0 ? new Date(Math.min(...dates)) : null;

  return date;
};
