// @flow strict-local

import type { Element } from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';

import SignupScene from './SignupScene';
import type { SignupQueryResponse } from '__generated__/SignupQuery.graphql';

export const query: GraphQLTaggedNode = graphql`
  query SignupQuery {
    viewer {
      __typename
    }
  }
`;

export default function SignupQuery(): Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: ?SignupQueryResponse) => <SignupScene />}
    />
  );
}
