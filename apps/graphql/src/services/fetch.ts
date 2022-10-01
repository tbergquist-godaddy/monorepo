// @ts-ignore: for now
import fetch from '@adeira/fetch';
import { RequestInit } from 'node-fetch';
import { log } from 'crosscutting';
import { __DEV__ } from 'environment';

interface AnyObject {
  [key: string]: unknown;
}

const Fetch = async <T = AnyObject>(url: string, options?: RequestInit): Promise<T> => {
  if (__DEV__) {
    log(url);
  }
  let response;
  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options?.headers ?? null),
      },
    });

    const json = await response.json();
    return json;
  } catch (err) {
    log(err, { response });
    throw err;
  }
};

export default Fetch;
