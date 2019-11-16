// @flow strict

import {
  QueryResponseCache,
  Environment as RelayEnvironment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import fetch from '@adeira/fetch';

const cache = new QueryResponseCache({ size: 100, ttl: 1000 * 60 * 60 * 15 }); // 15 minutes

const getBody = (operation, variables) => {
  if (operation.id) {
    return {
      queryId: operation.id,
      variables,
    };
  }
  return {
    query: operation.text,
    variables,
  };
};

export const createRelayEnvironment = (token: ?string, initialData: ?{ ... }) => {
  const store = new Store(new RecordSource(initialData));
  const fetchFn = async (operation, variables) => {
    const queryId = operation.name;

    const cachedData = cache.get(queryId, variables);
    if (cachedData != null) {
      return cachedData;
    }

    const res = await fetch('https://tbergq-graphql.now.sh/graphql/', {
      method: 'POST',
      headers: {
        Authorization: token ?? '',
        'content-type': 'application/json',
      },
      body: JSON.stringify(getBody(operation, variables)),
    });
    const data = await res.json();

    cache.set(queryId, variables, data);

    if (operation.operationKind === 'mutation') {
      cache.clear();
    }

    return data;
  };

  const network = Network.create(fetchFn);
  const env = new RelayEnvironment({
    network,
    store,
  });

  return env;
};

class Environment {
  #environment;
  #token;

  getEnvironment(token: ?string, initialData: ?{ ... }) {
    if (this.#environment != null && this.#token === token) {
      return this.#environment;
    }

    this.#environment = createRelayEnvironment(token, initialData);
    this.#token = token;
    cache.clear();
    return this.#environment;
  }
}

const environment = new Environment();

export default environment;
