// @flow

import fetch from '@adeira/fetch';

type FetchOptions = {|
  ...$Exact<RequestOptions>,
  +fetchTimeout?: number,
  +retryDelays?: $ReadOnlyArray<number>,
|};

const log = (...args: $ReadOnlyArray<string>) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};
const Fetch = async <T>(url: string, options?: FetchOptions): Promise<T> => {
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
        ...(options?.headers ?? null),
        ...defaultHeaders,
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
