import { RequestInit, Response } from 'node-fetch';
// @ts-ignore: for now
import nodeFetch from '@adeira/fetch';

export const log = (...args: any[]) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

export const fetch = (url: string, options: RequestInit = {}): Promise<Response> => {
  if (process.env.NODE_ENV === 'development') {
    log('🚀', url);
  }
  let response;
  try {
    response = nodeFetch(url, options);
    return response;
  } catch (e) {
    log('failed', { response });
    throw e;
  }
};
