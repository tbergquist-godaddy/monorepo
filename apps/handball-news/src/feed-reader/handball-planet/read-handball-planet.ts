import { parse } from 'node-html-parser';
import { invariant } from '@adeira/js';

import { Feed } from '../types';
import loadFeed from '../load-feed';

const { HANDBALL_PLANET_URL } = process.env;

const timeoutPromise = <T>(cb) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, 1000);
  });
};

const fetchHtml = async (url: string) => {
  let response = await fetch(url);

  while (response.status === 429) {
    response = await timeoutPromise(() => fetch(url));
  }

  return response.text();
};

const getImageUrl = async (url: string) => {
  const html = await fetchHtml(url);

  const root = parse(html ?? '');
  const imageContainer = root.querySelector('#post-feat-img');

  if (imageContainer == null) {
    return null;
  }

  const img: HTMLImageElement | undefined = imageContainer.childNodes.find(
    (node: any) => node.rawTagName === 'img',
  ) as any;

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
