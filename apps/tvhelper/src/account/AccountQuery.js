// @flow strict-local

import * as React from 'react';
import { QueryRenderer, graphql } from '@tbergq/relay';

import Layout from '../components/Layout';
import AccountScene from './AccountScene';
import type { AccountQueryResponse } from './__generated__/AccountQuery.graphql';

type Props = {};

export const query = graphql`
  query AccountQuery {
    viewer {
      ...Layout_viewer
    }
  }
`;

export default (function AccountQuery() {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: AccountQueryResponse) => (
        <Layout viewer={renderProps.viewer}>
          <AccountScene />
        </Layout>
      )}
    />
  );
}: React.ComponentType<Props>);
