// @flow strict

import { createRedisClient } from '@tbergq/redis';
import { invariant } from '@adeira/js';

const { REDIS_URL } = process.env;

invariant(REDIS_URL != null, 'Missing redis url environment variable');

const client = createRedisClient({ url: REDIS_URL });

export default client;
