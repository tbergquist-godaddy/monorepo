// @flow strict

import redis, { type CreateOptions } from 'redis';
import util from 'util';

export type RedisClient = {|
  get: (key: string) => Promise<?string>,
  mget: (keys: $ReadOnlyArray<string>) => Promise<$ReadOnlyArray<?string>>,
  set: (key: string, value: string, expire: 'EX' | 'PX', time: number) => Promise<'OK'>,
  mset: (keysAndValues: $ReadOnlyArray<string>) => Promise<'OK'>,
  expire: (key: string, timeout: number) => Promise<void>,
|};

export default function createPromisifiedRedisClient(options?: CreateOptions): RedisClient {
  const client = redis.createClient(options);

  const set: (
    key: string,
    value: string,
    expire: 'EX' | 'PX',
    time: number,
  ) => Promise<'OK'> = util.promisify(client.set).bind(client);
  const mset: (keysAndValues: $ReadOnlyArray<string>) => Promise<'OK'> = util
    .promisify(client.mset)
    .bind(client);

  const get: (key: string) => Promise<?string> = util.promisify(client.get).bind(client);

  const mget: (keys: $ReadOnlyArray<string>) => Promise<$ReadOnlyArray<?string>> = util
    .promisify(client.mget)
    .bind(client);

  const expire: (key: string, timeout: number) => Promise<void> = util
    .promisify(client.expire)
    .bind(client);

  return {
    get,
    mget,
    set,
    mset,
    expire,
  };
}
