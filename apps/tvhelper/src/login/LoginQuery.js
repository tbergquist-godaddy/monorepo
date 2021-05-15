// @flow strict-local

import type { Element } from 'react';
import { QueryRenderer, graphql, type GraphQLTaggedNode } from '@tbergq/relay';

import LoginScene from './LoginScene';
import type { LoginQueryResponse } from '__generated__/LoginQuery.graphql';

type Props = {
  +loginFailed: boolean,
};

export const query: GraphQLTaggedNode = graphql`
  query LoginQuery {
    viewer {
      __typename
    }
  }
`;

export default function LoginQuery(props: Props): Element<typeof QueryRenderer> {
  return (
    <QueryRenderer
      query={query}
      variables={{}}
      render={(renderProps: ?LoginQueryResponse) => <LoginScene loginFailed={props.loginFailed} />}
    />
  );
}
