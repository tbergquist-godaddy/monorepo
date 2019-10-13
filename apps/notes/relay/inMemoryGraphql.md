# In memory graphql

You don't need a graphql server running to start using graphql-relay on your client. You can start out with an in memory implementation of graphql on your client. 

This means that you will call your rest-api from your client, and write your graphql types and resolvers in your client code, allowing you to take advantage of relay fragment, refetch, pagination and mutations. 

Uploadables will not work though. 

How to do it: 

```js
// Environment
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import inMemoryFetcher from '../graphql/inMemoryFetch';
function fetchFn(request, variables) {
  return inMemoryFetcher(request.text, variables);
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchFn);

const environment = new Environment({
  network,
  store,
});

// inMemoryFetch.js
import { graphql } from 'graphql';

import schema from './src/Schema';

type Variables = { [string]: mixed, ... };

export default function inMemoryFetcher(source: string, variables: Variables) {
  return graphql(schema, source, undefined, undefined, variables);
}

```

### Dataloader

You should use [dataloader](https://www.npmjs.com/package/dataloader) for batching and caching to avoid spamming your REST API.
