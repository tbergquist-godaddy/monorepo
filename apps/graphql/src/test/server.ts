/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node';

export { rest } from 'msw';

export const server = setupServer();
