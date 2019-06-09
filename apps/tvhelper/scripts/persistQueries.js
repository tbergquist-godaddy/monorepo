// @flow

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import fetch from '@kiwicom/fetch';

const query = `mutation create($storedOperations: [StoredOperationInput!]!) {
  createdStoredOperations(storedOperations: $storedOperations) {
    createdOperations {
      operationId
      text
    }
  }
}`;

(async () => {
  execSync('yarn relay --persist-output ./persisted-queries.json', {
    stdio: 'inherit',
  });

  const persistedQueries = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '..', 'persisted-queries.json'),
      'utf8',
    ),
  );

  await fetch('https://tbergq-graphql.now.sh/graphql/', {
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
})();
