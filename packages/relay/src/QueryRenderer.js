// @flow

import * as React from 'react';
import {
  QueryRenderer as KiwiQueryRenderer,
  type GraphQLTaggedNode,
  createEnvironment,
} from '@kiwicom/relay';
import fetch from '@kiwicom/fetch';
import { QueryResponseCache } from 'relay-runtime';
import { Loader } from '@tbergq/rn-components';

const cache = new QueryResponseCache({ size: 100, ttl: 1000 * 60 * 60 * 15 }); // 15 minutes

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: Object,
  +render: Object => React.Node,
|};

export const TOKEN_KEY = 'tokenKey';
const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  } catch (err) {
    return '';
  }
};

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

const fetchFn = async (operation, variables) => {
  const queryId = operation.name;

  const cachedData = cache.get(queryId, variables);
  if (cachedData != null) {
    return cachedData;
  }
  const token = getToken();
  const res = await fetch('https://tbergq-graphql.now.sh/graphql/', {
    method: 'POST',
    headers: {
      Authorization: token,
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

// TODO: Should only be temporary fix, need to wrap login in a query and pass environment from there
export const environment = createEnvironment({
  fetchFn,
});

const onLoading = () => <Loader size="large" />;

export default function QueryRenderer(props: Props) {
  return (
    <KiwiQueryRenderer
      query={props.query}
      variables={props.variables}
      onResponse={props.render}
      environment={environment}
      onLoading={onLoading}
    />
  );
}
