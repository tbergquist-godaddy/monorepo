// @flow

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const execSync = require('child_process').execSync;

const query = `mutation create($storedOperations: [StoredOperationInput!]!) {
  createdStoredOperations(storedOperations: $storedOperations) {
    createdOperations {
      operationId
      text
    }
  }
}`;

(() => {
  execSync('yarn relay --persist-output ./persisted-queries.json', {
    stdio: 'inherit',
  });

  const persistedQueries = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'persisted-queries.json'), 'utf8'),
  );

  fetch('https://tbergq-graphql.now.sh/graphql/', {
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
  })
    .then(res => res.json())
    // eslint-disable-next-line no-console
    .then(json => console.log(json));
})();
