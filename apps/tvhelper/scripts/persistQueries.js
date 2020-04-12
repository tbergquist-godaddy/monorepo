// @flow

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
  // $FlowAllowDynamicImport
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
        storedOperations: Object.keys(persistedQueries).map(key => ({
          operationId: key,
          text: persistedQueries[key],
        })),
      },
    }),
  });
  const json = await response.json();
  // eslint-disable-next-line no-console
  console.log(json);
}
