// @flow strict-local

import * as React from 'react';
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

export default function LoginQuery(props: Props): React.Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: LoginQueryResponse) => (
        <Layout viewer={renderProps.viewer}>
          <LoginScene loginFailed={props.loginFailed} />
        </Layout>
      )}
    />
  );
}
