// @flow

import * as React from 'react';
import {
  QueryRenderer as KiwiQueryRenderer,
  type GraphQLTaggedNode,
  createEnvironment,
} from '@kiwicom/relay';
import fetch from '@kiwicom/fetch';

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

const fetchFn = async (operation, variables) => {
  const token = getToken();
  const res = await fetch('https://tbergq-graphql.now.sh/graphql/', {
    method: 'POST',
    headers: {
      Authorization: token,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return res.json();
};

// TODO: Should only be temporary fix, need to wrap login in a query and pass environment from there
export const environment = createEnvironment({
  fetchFn,
});

export default function QueryRenderer(props: Props) {
  return (
    <KiwiQueryRenderer
      query={props.query}
      variables={props.variables}
      onResponse={props.render}
      environment={environment}
    />
  );
}
