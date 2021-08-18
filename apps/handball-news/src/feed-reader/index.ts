import { Feed as _Feed } from './types';
import { readHandballPlanet } from './handball-planet';

export type Feed = _Feed;

export default async function loadFeeds(): Promise<ReadonlyArray<Feed>> {
  const feeds = await Promise.all([readHandballPlanet()]);
  return feeds.reduce((acc, feed) => [...acc, ...feed], []);
}
