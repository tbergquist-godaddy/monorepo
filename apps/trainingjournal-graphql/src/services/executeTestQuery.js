// @flow

import { graphql } from 'graphql';

import schema from '../Schema';

export function getOperationName(query: string): ?string {
  const match = query.match(/(?:query|mutation)\s(?<queryName>[^\s(]*)/);
  const name = match?.groups?.queryName;
  return name;
}

export default function executeTestQuery(query: string, variables: ?{ ... }): Promise<{ ... }> {
  return graphql(schema, query, null, null, variables);
}
