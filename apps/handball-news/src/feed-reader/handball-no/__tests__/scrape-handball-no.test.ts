/**
 * @jest-environment node
 */

import { rest } from 'msw';

import handballNoMain from '../../../test-utils/mocks/handball-no/main';
import article from '../../../test-utils/mocks/handball-no/article';
import { server } from '../../../test-utils/server';
import scrapeHandballNo from '../scrape-handball-no';

jest.mock('uuid', () => ({
  v4: () => 'uuid-123',
}));

it('gets the rss feed and the image url and dimensions', async () => {
  server.use(
    rest.get(`${process.env.HANDBALL_NO}`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.text(handballNoMain));
    }),
  );
  server.use(
    rest.get(`${process.env.HANDBALL_NO}/test-link-1`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.text(article));
    }),
  );

  expect(await scrapeHandballNo()).toMatchInlineSnapshot(`
Array [
  Object {
    "content": "
                        Link 1 teaser
                    ",
    "guid": "uuid-123",
    "hasImageConsent": null,
    "image": Object {
      "height": 360,
      "url": "http://localhost/hb-no/test-image-1",
      "width": 640,
    },
    "link": "http://localhost/hb-no/test-link-1",
    "source": "handball.no",
    "timestamp": NaN,
    "title": "Heading-1",
  },
]
`);
});
