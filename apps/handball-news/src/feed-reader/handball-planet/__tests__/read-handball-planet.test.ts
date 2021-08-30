/**
 * @jest-environment node
 */

import { rest } from 'msw';

import feedMock from '../../../test-utils/mocks/handball-planet/rss-feed';
import article from '../../../test-utils/mocks/handball-planet/article';
import { server } from '../../../test-utils/server';
import readHandballPlanet from '../read-handball-planet';

it('gets the rss feed and the image url and dimensions', async () => {
  server.use(
    rest.get(`http://localhost${process.env.HANDBALL_PLANET_URL}`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.xml(feedMock));
    }),
  );
  server.use(
    rest.get(`http://localhost/handball-planet.com/`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.text(article));
    }),
  );
  expect(await readHandballPlanet()).toMatchInlineSnapshot(`
Array [
  Object {
    "content": "The team captain of Telekom Veszprém for the upcoming 2021/22 season is Rasmus Lauge, the vice-captains are Máté Lékai and Andreas Nilsson. This trio is appointed by head-coach Momir Ilic. According to our captain, Rasmus Lauge, it is a great joy and honour to be named a leader of the team. We asked about his new appointment, […]
The post Rasmus Lauge is new Veszprem’s captain appeared first on Handball Planet.",
    "guid": "http://localhost/handball-planet.com/?p=51474",
    "image": Object {
      "height": 1080,
      "url": "https://www.handball-planet.com/wp-content/uploads/2021/08/veszprem_captain.jpg",
      "width": 1080,
    },
    "link": "http://localhost/handball-planet.com/?p=51474",
    "timestamp": 1629358419000,
    "title": "Rasmus Lauge is new Veszprem’s captain",
  },
  Object {
    "content": "MVP of the Olympic Games in Tokyo, Mathias Gidsel, will join Fuchse Berlin in summer 2022. The Danish right back, member of GOG, has signed three years contract with the team from German capital. Sports director Stefan Kretzschmar: “I’m looking forward to one of the greatest talents of our time. He’s an incredibly clever player […]
The post Mathias Gidsel to join Fuchse Berlin appeared first on Handball Planet.",
    "guid": "http://localhost/handball-planet.com/?p=51470",
    "image": Object {
      "height": 1080,
      "url": "https://www.handball-planet.com/wp-content/uploads/2021/08/veszprem_captain.jpg",
      "width": 1080,
    },
    "link": "http://localhost/handball-planet.com/?p=51470",
    "timestamp": 1629198593000,
    "title": "Mathias Gidsel to join Fuchse Berlin",
  },
]
`);
});
