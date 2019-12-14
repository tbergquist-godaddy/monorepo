// @flow

import DataLoader from 'dataloader';
import { ExerciseRepository, type ExerciseType } from '@tbergq/trainingjournal-persistence';

const fetchFunction = (userId: string) => {
  return ExerciseRepository.getExercises(userId);
};

const batchFunction = (ids: $ReadOnlyArray<string>) => {
  return Promise.all(ids.map(fetchFunction));
};

export default function createDataLoader() {
  return new DataLoader<string, ExerciseType[]>(batchFunction);
}
