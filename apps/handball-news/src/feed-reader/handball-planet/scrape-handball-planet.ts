import fetchHtml from 'services/fetch-html';
import { parse } from 'node-html-parser';
import { invariant } from '@adeira/js';
import { v4 } from 'uuid';
import log from 'logger';

import { Feed } from '../types';

const { HANDBALL_PLANET_NEWS } = process.env;

const fetchDate = async (url: string): Promise<number> => {
  const html = await fetchHtml(url);
  const root = parse(html);
  const dateString = root.querySelector('time')?.getAttribute('datetime') ?? null;
  const date = dateString == null ? Date.now() /* well */ : new Date(dateString).getTime();

  return date;
};

export default async function scrapeHandballPlanet(): Promise<ReadonlyArray<Feed>> {
  invariant(HANDBALL_PLANET_NEWS != null, 'HANDBALL_PLANET_NEWS is not defined');
  log('scraping handball planet');
  const html = await fetchHtml(HANDBALL_PLANET_NEWS);
  const root = parse(html);

  const newsSection = root.querySelector('#mvp_catlist_widget-7');
  const newsItems = newsSection.querySelectorAll('li');

  const feed: Array<Feed> = [];

  for (const newsItem of newsItems) {
    const link = newsItem.querySelector('a')?.getAttribute('href') ?? '';
    const title = newsItem.querySelector('h2')?.textContent ?? '';
    const content = newsItem.querySelector('p')?.textContent ?? '';
    const image = newsItem.querySelector('img');

    feed.push({
      title,
      content,
      guid: v4(),
      link,
      image: {
        height: parseInt(image?.getAttribute('height') ?? '0', 10),
        width: parseInt(image?.getAttribute('width') ?? '0', 10),
        url: image?.getAttribute('src') ?? '',
      },
      // eslint-disable-next-line no-await-in-loop
      timestamp: await fetchDate(link), // only run on static generation anyway
      source: 'handball-planet.com',
    });
  }
  log(`found ${feed.length} items on handball-planet`);
  return feed;
}
