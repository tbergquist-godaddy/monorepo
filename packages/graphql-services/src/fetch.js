// @flow

import fetch from '@adeira/fetch';

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
const Fetch = async <T>(url: string, options: FetchOptions = {}): Promise<T> => {
  if (__DEV__) {
    log(url);
  }

  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };
    // $FlowFixMe (>=<0.111.1)
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        // $FlowFixMe (>=<0.111.1)
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
