import fetchHtml from 'services/fetch-html';
import { invariant } from '@adeira/js';
import log from 'logger';
import { parse } from 'node-html-parser';
import { v4 } from 'uuid';

import { Feed } from '../types';

const { HANDBALL_NO } = process.env;

const getDate = async (url: string) => {
  const html = await fetchHtml(url);
  const root = parse(html);

  const dateString = root.querySelector('.date')?.textContent ?? '';
  const match = dateString.match(/^(?<day>\d{2})\.(?<month>\d{2})\.(?<year>\d{2})/);
  const day = match?.groups?.day ?? '';
  const year = match?.groups?.year ?? '';
  const month = match?.groups?.month ?? '';

  return new Date(`20${year}-${month}-${day}`).getTime();
};

export default async function scrapeHandballNo(): Promise<ReadonlyArray<Feed>> {
  log('fetching handball.no');
  invariant(HANDBALL_NO != null, 'Expected HANDBALL_NO to be defined, but it was not');

  const html = await fetchHtml(HANDBALL_NO);
  const root = parse(html);
  const newsArticles = root.querySelectorAll('.news-item');

  const feed: Feed[] = [];
  const itemPromises: Promise<number>[] = [];

  for (const item of newsArticles) {
    const anchor = item.querySelector('a');
    const title = item.querySelector('h2')?.textContent ?? '';
    const content = item.querySelector('.fixedHeightIntro')?.textContent ?? '';
    const image = item.querySelector('img');
    const link = `${HANDBALL_NO}${anchor.getAttribute('href')}`;

    feed.push({
      content,
      guid: v4(),
      image: {
        url: `${HANDBALL_NO}${image.getAttribute('src')}`,
        height: 360, // TODO Fix size
        width: 640,
      },
      link,
      timestamp: 0,
      title,
    });

    itemPromises.push(getDate(link));
  }
  const timestamps = await Promise.all(itemPromises);

  for (let i = 0; i < timestamps.length; i++) {
    feed[i].timestamp = timestamps[i];
  }

  return feed;
}
