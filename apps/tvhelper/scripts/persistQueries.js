// @flow

import fetch from '@adeira/fetch';

const query = `mutation create($storedOperations: [StoredOperationInput!]!) {
  createdStoredOperations(storedOperations: $storedOperations) {
    createdOperations {
      operationId
      text
    }
  }
}`;

type PersistedQueries = {
  +[key: string]: string,
  ...,
};

export default async function persistQueries(persistedQueries: PersistedQueries): Promise<void> {
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
}
