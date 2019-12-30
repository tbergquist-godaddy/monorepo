// @flow

import DataLoader from 'dataloader';
import { ExerciseRepository, type ExerciseType } from '@tbergq/trainingjournal-persistence';
import stringify from 'json-stable-stringify';

export type ExercisesArgs = {|
  +userId: string,
  +limit: number,
  +skip: number,
|};

export type ExercisesLoader = {|
  +exercises: ExerciseType[],
  +count: number,
|};

const fetchFunction = ({ userId, skip, limit }: ExercisesArgs) => {
  return ExerciseRepository.paginateExercises({
    userId,
    skip,
    limit,
  });
};

const batchFunction = (ids: $ReadOnlyArray<ExercisesArgs>) => {
  return Promise.all(ids.map(fetchFunction));
};

export default function createDataLoader() {
  return new DataLoader<ExercisesArgs, ExercisesLoader>(batchFunction, {
    cacheKeyFn: stringify,
  });
}
