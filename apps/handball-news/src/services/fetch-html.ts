import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60 });

const timeoutPromise = <T>(cb) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(cb());
    }, 1000);
  });
};

const fetchHtml = async (url: string): Promise<string> => {
  if (cache.has(url)) {
    return cache.get(url) ?? '';
  }
  let response = await fetch(url);

  while (response.status === 429) {
    response = await timeoutPromise(() => fetch(url));
  }

  const html = await response.text();
  if (html) {
    cache.set(url, html);
  }
  return html;
};

export default fetchHtml;
