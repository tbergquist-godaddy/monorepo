import fetch, { RequestInit } from 'node-fetch';
import { log } from 'crosscutting';

interface AnyObject {
  [key: string]: unknown;
}
const Fetch = async <T = AnyObject>(url: string, options?: RequestInit): Promise<T> => {
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
        ...(options?.headers ?? null),
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
