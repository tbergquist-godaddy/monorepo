import nodeFetch, { RequestInit, Response } from 'node-fetch';

export const log = (...args: any[]) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

export const fetch = (url: string, options: RequestInit = {}): Promise<Response> => {
  if (process.env.NODE_ENV === 'development') {
    log('🚀', url);
  }
  return nodeFetch(url, options);
};
