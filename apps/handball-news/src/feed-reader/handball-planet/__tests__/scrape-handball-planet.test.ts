/**
 * @jest-environment node
 */

import { rest } from 'msw';
import { server } from 'test-utils/server';
import article from 'test-utils/mocks/handball-planet/article';
import mock from 'test-utils/mocks/handball-planet/news-mock';

import scrapeHP from '../scrape-handball-planet';

jest.mock('uuid', () => ({
  v4: () => 'uuid_mock',
}));

it('scrapes the hb-planet news', async () => {
  server.use(
    rest.get(`${process.env.HANDBALL_PLANET_NEWS}`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.text(mock));
    }),
  );

  server.use(
    rest.get(`http://localhost/handball-planet.com/1`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.text(article));
    }),
  );

  expect(await scrapeHP()).toMatchInlineSnapshot(`
Array [
  Object {
    "content": "This is content",
    "guid": "uuid_mock",
    "image": Object {
      "height": 100,
      "url": "/img.jpg",
      "width": 100,
    },
    "link": "http://localhost/handball-planet.com/1",
    "source": "handball-planet.com",
    "timestamp": 1577836800000,
    "title": "This is title",
  },
]
`);
});
