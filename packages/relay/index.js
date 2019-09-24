// @flow

import {
  type RelayProp as _RelayProp,
  type RefetchRelayProp as _RefetchRelayProp,
  type PaginationRelayProp as _PaginationRelayProp,
  type Environment as _RelayEnvironmentType,
  type DeclarativeMutationConfig,
} from '@kiwicom/relay';

export { default as QueryRenderer } from './src/QueryRenderer';
export { default as Environment } from './src/Environment';
export {
  graphql,
  createFragmentContainer,
  commitMutation,
  createRefetchContainer,
  createPaginationContainer,
  createEnvironment,
  fetchQuery,
  RelayEnvironmentProvider,
  useRelayEnvironment,
} from '@kiwicom/relay';

export {
  QueryRendererProvider,
  useQueryRenderer,
  useQueryRendererAction,
} from './src/QueryRendererContext';

export type RelayProp = _RelayProp;
export type RefetchRelayProp = _RefetchRelayProp;
export type PaginationRelayProp = _PaginationRelayProp;
export type RelayEnvironmentType = _RelayEnvironmentType;
export type MutationConfig = DeclarativeMutationConfig;
