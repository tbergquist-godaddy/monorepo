// @flow

import { type RelayProp as _RelayProp } from '@kiwicom/relay';

export {
  default as QueryRenderer,
  environment,
  TOKEN_KEY,
} from './src/QueryRenderer';
export {
  graphql,
  createFragmentContainer,
  commitMutation,
} from '@kiwicom/relay';

export type RelayProp = _RelayProp;
