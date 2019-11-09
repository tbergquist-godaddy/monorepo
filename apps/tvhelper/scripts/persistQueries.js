// @flow

import path from 'path';
import fetch from '@adeira/fetch';
import { ShellCommand } from '@adeira/monorepo-utils';

const query = `mutation create($storedOperations: [StoredOperationInput!]!) {
  createdStoredOperations(storedOperations: $storedOperations) {
    createdOperations {
      operationId
      text
    }
  }
}`;

(async () => {
  const monorepoRoot = path.join(__dirname, '..', '..', '..');

  new ShellCommand(monorepoRoot, 'yarn', 'relay', '--persist-output', './persisted-queries.json')
    .setOutputToScreen()
    .runSynchronously();

  // $FlowAllowDynamicImport
  const persistedQueries = require(path.join(monorepoRoot, 'persisted-queries.json'));

  const response = await fetch('https://tbergq-graphql.now.sh/graphql/', {
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
})();
