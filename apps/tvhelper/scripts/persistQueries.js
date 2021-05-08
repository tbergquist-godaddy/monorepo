// @flow

/* eslint-disable no-console */

import fetch from '@adeira/fetch';
import { config } from 'dotenv';
import path from 'path';
import { findMonorepoRoot } from '@adeira/monorepo-utils';
import { invariant } from '@adeira/js';

config();

const query = `mutation create($storedOperations: [StoredOperationInput!]!) {
  createdStoredOperations(storedOperations: $storedOperations) {
    createdOperations {
      operationId
      text
    }
  }
}`;

const { GRAPHQL_URL } = process.env;
invariant(GRAPHQL_URL != null, 'Missing GRAPHQL_URL env variable');
const getPersistedQueries = () => {
  return require(path.join(findMonorepoRoot(), 'persisted-queries.json'));
};

export default async function persistQueries(): Promise<void> {
  const persistedQueries = getPersistedQueries();
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        storedOperations: Object.keys(persistedQueries).map((key) => ({
          operationId: key,
          text: persistedQueries[key],
        })),
      },
    }),
  });
  const json = await response.json();

  console.log(json);
}

(async () => {
  try {
    await persistQueries();
  } catch (e) {
    console.log('Failed to store queries', e);
    process.exit(-1);
  }
})();
