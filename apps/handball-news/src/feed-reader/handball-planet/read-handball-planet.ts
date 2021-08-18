import { Feed } from '../types';
import loadFeed from '../load-feed';

export default async function readHandballPlanet(): Promise<ReadonlyArray<Feed>> {
  const feed = await loadFeed('https://www.handball-planet.com/feed/');

  return feed.items.map((item) => ({
    title: item.title ?? '',
    content: item.contentSnippet?.split('\n')[0] ?? '',
    guid: item.guid ?? '',
    link: item.guid ?? '',
  }));
}
