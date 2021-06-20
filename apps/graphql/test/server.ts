import { setupServer } from 'msw/node';
import { rest } from 'msw';

import meta from './datasets/meta.json';

const handlers = [];

for (const [key, value] of Object.entries<string>(meta)) {
  handlers.push(
    rest.get(key, (_, res, ctx) => {
      const json = require(`./datasets/${value}`);
      return res(ctx.status(200), ctx.json(json));
    }),
  );
}
const server = setupServer(...handlers);

export default server;
