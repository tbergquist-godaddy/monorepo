// @flow

import { offsetToCursor } from 'graphql-relay';

type Config = {|
  +offset: number,
  +count: number,
|};
export default function toConnection<T>(items: $ReadOnlyArray<T>, config: Config) {
  const edges = items.map<{|
    +cursor: string,
    +node: T,
  |}>((value, index) => ({
    cursor: offsetToCursor(config.offset + index),
    node: value,
  }));

  const firstEdge = edges[0];
  const lastEdge = edges[edges.length - 1];

  return {
    edges,
    pageInfo: {
      startCursor: firstEdge != null ? firstEdge.cursor : null,
      endCursor: lastEdge != null ? lastEdge.cursor : null,
      hasPreviousPage: config.offset > 0,
      hasNextPage: config.count > config.offset + items.length,
    },
  };
}
