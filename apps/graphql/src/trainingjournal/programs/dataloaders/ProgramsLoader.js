// @flow

import Dataloader from 'dataloader';
import { type Program, ProgramRepository } from '@tbergq/trainingjournal-persistence';
import stringify from 'json-stable-stringify';

export type ProgramArgs = {|
  +userId: string,
  +limit: number,
  +skip: number,
|};

export type ProgramLoader = {|
  +programs: $ReadOnlyArray<Program>,
  +count: number,
|};

const fetchFunction = (args: ProgramArgs) => ProgramRepository.getPrograms(args);

const batchFunction = (args: $ReadOnlyArray<ProgramArgs>) => {
  return Promise.all(args.map(fetchFunction));
};

export default function createProgramsLoader(): Dataloader<
  ProgramArgs,
  ProgramLoader,
  ProgramArgs,
> {
  return new Dataloader<ProgramArgs, ProgramLoader>(batchFunction, {
    cacheKeyFn: stringify,
  });
}
