// @flow

import {
  type RelayProp as _RelayProp,
  type RefetchRelayProp as _RefetchRelayProp,
  type PaginationRelayProp as _PaginationRelayProp,
} from '@kiwicom/relay';

export { default as QueryRenderer, environment, TOKEN_KEY } from './src/QueryRenderer';
export {
  graphql,
  createFragmentContainer,
  commitMutation,
  createRefetchContainer,
  createPaginationContainer,
  createEnvironment,
} from '@kiwicom/relay';

export type RelayProp = _RelayProp;
export type RefetchRelayProp = _RefetchRelayProp;
export type PaginationRelayProp = _PaginationRelayProp;
