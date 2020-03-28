// @flow strict-local

import * as React from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';

import Layout from '../components/Layout';
import SignupScene from './SignupScene';
import type { SignupQueryResponse } from './__generated__/SignupQuery.graphql';

export const query: GraphQLTaggedNode = graphql`
  query SignupQuery {
    viewer {
      ...Layout_viewer
    }
  }
`;

export default function SignupQuery(): React.Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: SignupQueryResponse) => (
        <Layout viewer={renderProps.viewer}>
          <SignupScene />
        </Layout>
      )}
    />
  );
}
