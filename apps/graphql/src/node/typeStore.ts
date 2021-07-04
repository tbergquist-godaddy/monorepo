import type { GraphQLObjectType } from 'graphql';

import type { GraphqlContextType } from '../services/createGraphqlContext';

/**
 * The sole purpose of the file is avoiding circular dependencies.
 * See https://github.com/graphql/graphql-relay-js/issues/113
 */
type LoaderFunction<T = any> = (id: string, context: GraphqlContextType) => Promise<T>;
type Type = {
  type: GraphQLObjectType;
  loader: LoaderFunction;
};
type Types = {
  TvShow: Type | null | undefined;
};
const types: Types = {
  TvShow: null,
};
export function register<T>(
  type: keyof Types,
  value: GraphQLObjectType,
  loader: LoaderFunction<T>,
): void {
  types[type] = {
    type: value,
    loader,
  };
}
export function getType(type: keyof Types): Type | null | undefined {
  return types[type];
}
