// @flow

import { nodeDefinitions } from 'graphql-relay';
import { decode } from '@adeira/graphql-global-id/src/Encoder';

import type { GraphqlContextType } from '../services/createGraphqlContext';
import { getType } from './typeStore';

async function loadType(relayId, context) {
  // $FlowExpectedError: Cannot call fromGlobalId with relayId bound to opaqueID because string [1] is incompatible with OpaqueIDString
  const decoded = decode(relayId);
  const [__type, id]: any[] = decoded.split(':');
  const type = getType(__type);

  if (type == null) {
    return null;
  }
  const entity = await type.loader(id, context);
  return {
    ...entity,
    __type: type.type,
  };
}

function detectType(value) {
  return value.__type;
}

export const { nodeInterface, nodeField } = nodeDefinitions<GraphqlContextType>(
  loadType,
  detectType,
);
