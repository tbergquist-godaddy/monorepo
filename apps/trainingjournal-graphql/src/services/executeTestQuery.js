// @flow

import { graphql } from 'graphql';

import schema from '../Schema';

export default function executeTestQuery(query: string, variables: ?{ ... }): Promise<{ ... }> {
  return graphql(schema, query, null, null, variables);
}
