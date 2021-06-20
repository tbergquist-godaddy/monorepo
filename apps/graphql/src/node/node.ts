import { nodeDefinitions } from '@adeira/graphql-relay';
// @ts-ignore: This exists
import { decode } from '@adeira/graphql-global-id/src/Encoder';

import { getType } from './typeStore';

async function loadType(relayId: string, context: any) {
  const decoded = decode(relayId);
  const [__type, id]: any[] = decoded.split(':');
  const type = getType(__type);

  if (type == null) {
    return null;
  }

  const entity = await type.loader(id, context);
  return { ...entity, __type: type.type };
}

function detectType(value: { __type: string }) {
  return value.__type;
}

export const { nodeInterface, nodeField } = nodeDefinitions(loadType, detectType);
