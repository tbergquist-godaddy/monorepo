// @flow

import type { Node } from 'react';
import {
  type GraphQLTaggedNode,
  useRelayEnvironment,
  QueryRenderer as AdeiraQueryRenderer,
  getDataFromRequest,
} from '@adeira/relay';
import { Spinner as Loading } from '@tbergq/components';
import { isBrowser } from '@adeira/js';

type Props = {
  +query: GraphQLTaggedNode,
  +variables: { ... },
  +render: (props: ?$FlowFixMe) => Node,
  +renderLoader?: boolean,
};

export default function QueryRenderer(props: Props): Node {
  const environment = useRelayEnvironment();

  if (!isBrowser()) {
    const data = getDataFromRequest(
      {
        query: props.query,
        variables: props.variables,
      },
      environment,
    );
    // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
    return data == null ? <Loading dataTest="queryRenderLoader" /> : props.render(data);
  }

  function render({ props: rendererProps, error }) {
    if (error) {
      return <div>Failed to load data from the server</div>;
    }
    if (rendererProps || props.renderLoader === false) {
      return props.render(rendererProps);
    }
    // $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>)
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
