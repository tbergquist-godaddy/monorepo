import Parser from 'rss-parser';
import log from 'logger';

export default function readFeed(url: string): ReturnType<typeof parser.parseURL> {
  log('Fetching feed for url: ', url);
  const parser = new Parser();
  return parser.parseURL(url);
}
