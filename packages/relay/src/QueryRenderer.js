// @flow

import * as React from 'react';
import { QueryRenderer as KiwiQueryRenderer, type GraphQLTaggedNode } from '@kiwicom/relay';
import { Loader, Text, View } from '@tbergq/rn-components';
import { createOperationDescriptor } from 'relay-runtime';

import Environment from './Environment';
import { useQueryRenderer } from './QueryRendererContext';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: { ... },
  +render: ({| +[key: string]: any |}) => React.Node,
|};

export const TOKEN_KEY = 'tokenKey';
const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  } catch (err) {
    return '';
  }
};

export default function QueryRenderer(props: Props) {
  const context = useQueryRenderer();

  const token = getToken();
  const environment = Environment.getEnvironment(token, context);

  const getSSRData = () => {
    if (typeof process !== 'undefined') {
      const store = environment.getStore();
      const { getRequest } = environment.unstable_internal;
      const operation = createOperationDescriptor(getRequest(props.query), props.variables);
      return store.lookup(operation.root);
    }
    return null;
  };

  const contextData = getSSRData();

  function render({ props: rendererProps, error }) {
    const data = rendererProps ?? contextData?.data;
    if (error) {
      return (
        <View>
          <Text>Failed to load data from the server</Text>
        </View>
      );
    }
    if (data) {
      return props.render(data);
    }
    return <Loader size="large" />;
  }

  return (
    <KiwiQueryRenderer
      query={props.query}
      variables={props.variables}
      environment={environment}
      render={render}
      dataFrom="STORE_THEN_NETWORK"
    />
  );
}
