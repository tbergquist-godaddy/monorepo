import { server, rest } from 'test/server';
import { episode } from 'test/datasets';

import makeEpisodeLoader from '../episode-loader';

const setup = () => {
  const loader = makeEpisodeLoader();
  return {
    loader,
  };
};

it('returns an episode', async () => {
  const { loader } = setup();
  const id = 123;
  server.use(
    rest.get(`http://api.tvmaze.com/episodes/${id}?embed=show`, (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(episode));
    }),
  );
  await expect(loader.load(id)).resolves.toMatchInlineSnapshot(`
          Object {
            "airdate": "2013-01-23",
            "id": 123,
            "image": Object {
              "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/83/209331.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/83/209331.jpg",
            },
            "name": "Trust But Verify",
            "number": 11,
            "season": 1,
            "summary": "<p>The next person on Arrow's list is Diggle's commanding officer and mentor from Afghanistan, Ted Gaynor. Oliver suspects Ted is responsible for recent armoured truck robberies, but Diggle defends Ted and takes a job at Ted's security company to keep an eye on him. Oliver decides to make a move on Ted, which puts him at odds with Diggle. Meanwhile, Thea suspects that Moira is having an affair with Malcolm. Tommy and Laurel have an awkward dinner with Malcolm.</p>",
            "tvshowId": 123,
          }
        `);
});
