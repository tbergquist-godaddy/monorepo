import { parse } from 'node-html-parser';
import { invariant } from '@adeira/js';
import fetchHtml from 'services/fetch-html';
import log from 'logger';

import { Feed } from '../types';
import loadFeed from '../load-feed';

const { HANDBALL_PLANET_URL } = process.env;

const getImageUrl = async (url: string) => {
  const html = await fetchHtml(url);

  const root = parse(html ?? '');
  const imageContainer = root.querySelector('#post-feat-img');

  if (imageContainer == null) {
    return null;
  }

  const img = imageContainer.querySelector('img');

  if (img == null) {
    return null;
  }

  return {
    url: img.getAttribute('src') ?? '',
    width: parseInt(img.getAttribute('width') ?? '0', 10),
    height: parseInt(img.getAttribute('height') ?? '0', 10),
  };
};

export default async function readHandballPlanet(): Promise<ReadonlyArray<Feed>> {
  invariant(
    HANDBALL_PLANET_URL != null,
    'Expected HANDBALL_PLANET_URL env variable to be set, but it was not',
  );
  log('loading handball planet feed');
  const feed = await loadFeed(HANDBALL_PLANET_URL);
  const imagesUrlPromises = feed.items.map((item) => getImageUrl(item.guid ?? ''));
  const urls = await Promise.all(imagesUrlPromises);

  return feed.items.map((item, i) => ({
    title: item.title ?? '',
    content: item.contentSnippet ?? '',
    guid: item.guid ?? '',
    link: item.guid ?? '',
    image: urls[i],
    timestamp: item.isoDate != null ? new Date(item.isoDate).getTime() : null,
  }));
}
