import { Feed as _Feed, Image as _Image } from './types';
import { scrapeHandballNo } from './handball-no';
import { readStregspillerRssFeed } from './stregspiller';

export type Feed = _Feed;
export type Image = _Image;

export default async function loadFeeds(language: string): Promise<ReadonlyArray<Feed>> {
  const feedPromises = [readStregspillerRssFeed()];
  if (language === 'nb') {
    feedPromises.push(scrapeHandballNo());
  }
  const feeds = await Promise.all(feedPromises);
  return feeds
    .reduce<Array<Feed>>((acc, feed) => [...acc, ...feed], [])
    .sort((a, b) => {
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      return 0;
    });
}
