// @flow

import Dataloader from 'dataloader';
import { fetch } from '@tbergq/graphql-services';

import redisClient from '../../../services/redisClient';
import type { TvShow } from '../TvShow';

const fetchFromServer = async (id: string) => {
  const data = await fetch(
    `http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=nextepisode&embed[]=previousepisode&embed[]=cast`,
  );
  redisClient.set(`tvshow:${id}`, JSON.stringify(data), 'PX', 1000 * 60 * 60 * 24);
  return data;
};

const fetchTvDetail = async (ids: $ReadOnlyArray<string>) => {
  const data = await redisClient.mget(ids.map(id => `tvshow:${id}`));
  const promises = [];
  for (const [index, redisData] of data.entries()) {
    if (redisData != null) {
      promises.push(JSON.parse(redisData));
    } else {
      const id = ids[index];
      promises.push(fetchFromServer(id));
    }
  }
  const responses = await Promise.all(promises);

  return responses.map(response => {
    const nextDate = response?._embedded?.nextepisode?.airdate ?? null;
    const previousDate = response?._embedded?.previousepisode?.airdate ?? null;
    return {
      ...response,
      ...(response._embedded
        ? {
            _embedded: {
              ...response._embedded,
              nextepisode: {
                ...response._embedded.nextepisode,
                airdate: nextDate !== null ? new Date(nextDate) : null,
              },
              previousepisode: {
                ...response._embedded.previousepisode,
                airdate: previousDate !== null ? new Date(previousDate) : null,
              },
            },
          }
        : {}),
    };
  });
};

const TvDetailLoader = () => new Dataloader<string, TvShow>(fetchTvDetail);

export default TvDetailLoader;
