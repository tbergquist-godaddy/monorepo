// @flow strict-local

import type { Element } from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';

import Layout from '../components/Layout';
import LoginScene from './LoginScene';
import type { LoginQueryResponse } from './__generated__/LoginQuery.graphql';

type Props = {
  +loginFailed: boolean,
};

export const query: GraphQLTaggedNode = graphql`
  query LoginQuery {
    viewer {
      ...Layout_viewer
    }
  }
`;

export default function LoginQuery(props: Props): Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: ?LoginQueryResponse) => (
        <Layout viewer={renderProps?.viewer}>
          {/* $FlowFixMe[incompatible-type-arg] $FlowFixMe(>=<150.1>) */}
          <LoginScene loginFailed={props.loginFailed} />
        </Layout>
      )}
    />
  );
}
