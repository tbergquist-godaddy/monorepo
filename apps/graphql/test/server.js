// @flow

import { setupServer } from 'msw/node';
import { rest } from 'msw';

import meta from './datasets/meta.json';

const handlers = [];

for (const [key, v] of Object.entries(meta)) {
  const value: string = (v: any);
  handlers.push(
    rest.get(key, (_, res, ctx) => {
      const json = require(`./datasets/${value}`);
      return res(ctx.status(200), ctx.json(json));
    }),
  );
}
const server: $FlowFixMe = setupServer(...handlers);

export default server;
