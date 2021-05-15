// @flow strict-local

import type { ComponentType } from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';

import AccountScene from './AccountScene';
import type { AccountQueryResponse } from '__generated__/AccountQuery.graphql';

type Props = {};

export const query: GraphQLTaggedNode = graphql`
  query AccountQuery {
    viewer {
      __typename
    }
  }
`;

export default (function AccountQuery() {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: ?AccountQueryResponse) => <AccountScene />}
    />
  );
}: ComponentType<Props>);
