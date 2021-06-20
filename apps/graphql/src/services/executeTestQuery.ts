import { graphql } from 'graphql';

import schema from '../Schema';
import createContext from './createGraphqlContext';

export default function executeTestQuery(
  query: string,
  variables: {} | null | undefined,
  request: {} | null | undefined = {},
): Promise<{}> {
  // @ts-ignore: Ok for testing purposes
  return graphql(schema, query, null, createContext(request), variables);
}
