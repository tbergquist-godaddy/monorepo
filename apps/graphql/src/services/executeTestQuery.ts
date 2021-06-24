import { graphql } from 'graphql';

import schema from '../application/Schema';
import createContext from './createGraphqlContext';

export default function executeTestQuery(
  query: string,
  variables: Record<string, unknown> | null | undefined,
  request: Record<string, unknown> | null | undefined = {},
): Promise<Record<string, unknown>> {
  // @ts-ignore: Ok for testing purposes
  return graphql(schema, query, null, createContext(request), variables);
}
