// @flow

import * as React from 'react';
import {
  type GraphQLTaggedNode,
  useRelayEnvironment,
  QueryRenderer as AdeiraQueryRenderer,
  type Environment,
} from '@adeira/relay';
import { Loading } from '@tbergq/components';
import { isBrowser } from '@adeira/js';
import { getRequest, createOperationDescriptor } from 'relay-runtime';

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: { ... },
  +render: ({| +[key: string]: any |}) => React.Node,
  +environment?: Environment,
|};

export default function QueryRenderer(props: Props) {
  const environment = props.environment ?? useRelayEnvironment();

  if (!isBrowser()) {
    const request = getRequest(props.query);
    const operation = createOperationDescriptor(request, props.variables);

    const res = environment.lookup(operation.fragment);
    const data = res.data;
    return data == null ? <Loading dataTest="queryRenderLoader" /> : props.render(data);
  }

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
    <AdeiraQueryRenderer
      query={props.query}
      variables={props.variables}
      environment={environment}
      render={render}
      fetchPolicy="store-and-network"
    />
  );
}
