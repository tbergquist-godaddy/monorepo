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

const Fetch = async (url: string, options: FetchOptions = {}) => {
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
    console.log(err); // eslint-disable-line no-console
    throw err;
  }
};

export default Fetch;
