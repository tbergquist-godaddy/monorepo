// @flow

import * as React from 'react';
import {
  QueryRenderer as KiwiQueryRenderer,
  type GraphQLTaggedNode,
  type Environment,
} from '@adeira/relay';
import { Loader, Text, View } from '@tbergq/rn-components';
import { createOperationDescriptor, getRequest } from 'relay-runtime';
import { Platform } from 'react-native';

import EnvironmentFactory from './Environment';
import { useQueryRenderer } from './QueryRendererContext';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: { ... },
  +render: ({| +[key: string]: any |}) => React.Node,
  +environment?: Environment,
|};

export default function QueryRenderer(props: Props) {
  const { ssrData, token } = useQueryRenderer();

  const environment = props.environment ?? EnvironmentFactory.getEnvironment(token, ssrData);

  const getSSRData = () => {
    if (Platform.OS === 'web' && typeof window === 'undefined') {
      const store = environment.getStore();

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
    return <Loader testID="queryRenderLoader" size={Platform.OS === 'web' ? 'large' : 'small'} />;
  }

  return (
    <KiwiQueryRenderer
      query={props.query}
      variables={props.variables}
      environment={environment}
      render={render}
      fetchPolicy="store-and-network"
    />
  );
}
