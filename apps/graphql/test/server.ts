/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node';

export { rest } from 'msw';

// import meta from './datasets/meta.json';

// const handlers = [];

// for (const [key, value] of Object.entries<string>(meta)) {
//   handlers.push(
//     rest.get(key, (_, res, ctx) => {
//       const json = require(`./datasets/${value}`);
//       return res(ctx.status(200), ctx.json(json));
//     }),
//   );
// }
export const server = setupServer();

export default server;
