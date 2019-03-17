// @flow

import * as React from 'react';
import {
  QueryRenderer as KiwiQueryRenderer,
  type GraphQLTaggedNode,
  createEnvironment,
} from '@kiwicom/relay';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: Object,
  +render: Object => React.Node,
|};

export const TOKEN_KEY = 'tokenKey';
const fetchFn = async (operation, variables) => {
  const token =
    localStorage != null ? localStorage.getItem(TOKEN_KEY) ?? '' : '';
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
const environment = createEnvironment({
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
