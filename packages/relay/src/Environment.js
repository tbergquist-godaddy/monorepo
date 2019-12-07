// @flow

import { QueryResponseCache } from 'relay-runtime';
import fetch from '@adeira/fetch';
import { createEnvironment, type RecordMap } from '@adeira/relay';

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

export const createRelayEnvironment = (token: ?string, initialData: ?RecordMap) => {
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

  // const network = Network.create(fetchFn);
  const env = createEnvironment({
    fetchFn,
    records: initialData,
  });

  return env;
};

class Environment {
  #environment;
  #token;

  getEnvironment(token: ?string, initialData: ?RecordMap) {
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
