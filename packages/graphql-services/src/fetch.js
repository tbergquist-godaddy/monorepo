// @flow

import fetch from '@kiwicom/fetch';

type FetchOptions = {
  +method?: 'GET' | 'POST',
  +headers?: {
    +[string]: mixed,
    ...,
  },
  ...
};

const log = (...args: $ReadOnlyArray<string>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};
const Fetch = async (url: string, options: FetchOptions = {}) => {
  if (__DEV__) {
    log(url);
  }

  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    const json = await response.json();
    return json;
  } catch (err) {
    log(err);
    throw err;
  }
};

export default Fetch;
