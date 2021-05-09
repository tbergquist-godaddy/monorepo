// @flow

import fetch from '@adeira/fetch';
import { createEnvironment, type RecordMap, type Environment as RelayEnv } from '@adeira/relay';
import { invariant } from '@adeira/js';

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

const { GRAPHQL_URL } = process.env;
invariant(GRAPHQL_URL != null, 'You need to set GRAPHQL_URL');

export const createRelayEnvironment = (token: ?string, initialData: ?RecordMap): RelayEnv => {
  const fetchFn = async (operation, variables) => {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Authorization': token ?? '',
        'content-type': 'application/json',
      },
      body: JSON.stringify(getBody(operation, variables)),
    });
    const data = await res.json();

    return data;
  };

  const env = createEnvironment({
    fetchFn,
    records: initialData,
    gcReleaseBufferSize: 50,
  });

  return env;
};

class Environment {
  #environment: RelayEnv;
  #token: ?string;

  getEnvironment(token: ?string, initialData: ?RecordMap): RelayEnv {
    if (this.#environment != null && this.#token === token) {
      return this.#environment;
    }

    this.#environment = createRelayEnvironment(token, initialData);
    this.#token = token;
    return this.#environment;
  }
}

const environment: Environment = new Environment();

export default environment;
