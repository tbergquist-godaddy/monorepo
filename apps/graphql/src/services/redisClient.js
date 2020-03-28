// @flow strict

import { createRedisClient, type RedisClient } from '@tbergq/redis';
import { invariant } from '@adeira/js';

const { REDIS_URL } = process.env;

invariant(REDIS_URL != null, 'Missing redis url environment variable');

const client: RedisClient = createRedisClient({ url: REDIS_URL });

export default client;
