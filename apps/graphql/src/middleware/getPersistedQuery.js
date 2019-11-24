// @flow

import bodyParser from 'body-parser';
import type { $Request, $Response } from 'express';
import { StoredOperationRepository } from '@tbergq/graphql-persistence';

const jsonParser = bodyParser.json();

export default function matchQueryMiddleware() {
  return (req: $Request, res: $Response, next: Function) => {
    return jsonParser(req, res, async () => {
      const { queryId } = req.body;
      if (typeof queryId === 'string') {
        const query = await StoredOperationRepository.getOperationText(queryId);

        if (query != null) {
          // eslint-disable-next-line require-atomic-updates
          req.body.query = query;
        } else {
          throw new Error(`matchQueryMiddleware: can't find queryId: ${queryId}`);
        }
      }
      next();
    });
  };
}
