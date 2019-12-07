// @flow

import * as React from 'react';
import { type GraphQLTaggedNode, type Environment } from '@adeira/relay';
import { Loading } from '@tbergq/components';

import EnvironmentFactory from './Environment';
import { useQueryRenderer } from './QueryRendererContext';
import RelayQueryRenderer from './ReactRelayQueryRenderer';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: { ... },
  +render: ({| +[key: string]: any |}) => React.Node,
  +environment?: Environment,
|};

export default function QueryRenderer(props: Props) {
  const { ssrData, token } = useQueryRenderer();

  const environment = props.environment ?? EnvironmentFactory.getEnvironment(token, ssrData);

  function render({ props: rendererProps, error }) {
    if (error) {
      return <div>Failed to load data from the server</div>;
    }
    if (rendererProps) {
      return props.render(rendererProps);
    }
    return <Loading dataTest="queryRenderLoader" />;
  }

  return (
    <RelayQueryRenderer
      query={props.query}
      variables={props.variables}
      environment={environment}
      render={render}
      fetchPolicy="store-and-network"
    />
  );
}
