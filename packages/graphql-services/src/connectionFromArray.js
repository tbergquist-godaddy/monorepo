// @flow strict-local

import { connectionFromArray } from '@adeira/graphql-relay';

export type ConnectionArguments = {
  before?: ?ConnectionCursor,
  after?: ?ConnectionCursor,
  first?: ?number,
  last?: ?number,
  ...
};

type ConnectionCursor = string;

/**
 * A flow type designed to be exposed as `PageInfo` over GraphQL.
 */
type PageInfo = {
  startCursor: ?ConnectionCursor,
  endCursor: ?ConnectionCursor,
  hasPreviousPage: ?boolean,
  hasNextPage: ?boolean,
};

/**
 * A flow type designed to be exposed as a `Connection` over GraphQL.
 */
export type Connection<T> = {
  edges: Array<Edge<T>>,
  pageInfo: PageInfo,
};

type Edge<T> = {
  node: T,
  cursor: ConnectionCursor,
};

export default function connectionFromArrayWrapper<T>(
  data: Array<T>,
  args: ConnectionArguments,
): Connection<T> {
  // $FlowExpectedError: Module not using exact_by_default
  return connectionFromArray(data, args);
}
