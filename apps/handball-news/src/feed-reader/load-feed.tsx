import Parser from 'rss-parser';

export default function readFeed(url: string): ReturnType<typeof parser.parseURL> {
  const parser = new Parser();
  return parser.parseURL(url);
}
