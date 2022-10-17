import Dataloader from 'dataloader';
import { fetch } from 'crosscutting';
import { TMDB_API_KEY } from 'environment';

import { Configuration } from '../entities/configuration';

const batchFn = async (baseUrl: string): Promise<Array<Configuration>> => {
  const res = await fetch(`${baseUrl}/configuration?api_key=${TMDB_API_KEY}`);
  const json = await res.json();
  return [json];
};

export type ConfigurationDataloader = Dataloader<string, Configuration>;

const makeSearchConfigDataloader = (): ConfigurationDataloader => {
  return new Dataloader((baseUrl: ReadonlyArray<string>) => {
    return batchFn(baseUrl[0]);
  });
};

export default makeSearchConfigDataloader;
