// @flow strict-local

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

import Layout from '../components/Layout';
import SignupScene from './SignupScene';
import type { SignupQueryResponse } from './__generated__/SignupQuery.graphql';

export const query = graphql`
  query SignupQuery {
    viewer {
      ...Layout_viewer
    }
  }
`;

export default function SignupQuery() {
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
