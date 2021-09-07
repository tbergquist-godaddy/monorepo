import { Feed } from 'feed-reader';
import { STREGSPILLER_RSS_FEED } from 'environment';
import log from 'logger';
import fetchHtml from 'services/fetch-html';
import { parse } from 'node-html-parser';

import loadFeed from '../load-feed';

const fetchImage = async (url: string) => {
  const html = await fetchHtml(url);
  const root = parse(html);
  const img = root.querySelectorAll('img')[2]; // This is random, but only actual selector that should work
  return img.getAttribute('src') ?? '';
};
export async function readStregspillerRssFeed(): Promise<Array<Feed>> {
  log('fetching rss feed for stregsspiller.com');
  const rssFeed = await loadFeed(STREGSPILLER_RSS_FEED);

  const items: Array<Feed> = [];

  for (const item of rssFeed.items) {
    items.push({
      content: item.contentSnippet ?? '',
      guid: item.guid ?? '',
      image: {
        url: await fetchImage(item.link ?? ''),
        height: 0,
        width: 0,
      },
      link: item.link ?? '',
      source: 'stregspiller.com',
      timestamp: item.pubDate != null ? new Date(item.pubDate).getTime() : 0,
      title: item.title ?? '',
    });
  }
  return items;
}
