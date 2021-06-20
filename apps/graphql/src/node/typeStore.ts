import type { GraphQLObjectType } from 'graphql';
import type { GraphqlContextType } from '../services/createGraphqlContext';

/**
 * The sole purpose of the file is avoiding circular dependencies.
 * See https://github.com/graphql/graphql-relay-js/issues/113
 */
type LoaderFunction = (
  id: string,
  context: GraphqlContextType,
) => Promise<Readonly<Record<string, unknown>>>;
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
export function register(type: keyof Types, value: GraphQLObjectType, loader: LoaderFunction) {
  types[type] = {
    type: value,
    loader,
  };
}
export function getType(type: keyof Types): Type | null | undefined {
  return types[type];
}
