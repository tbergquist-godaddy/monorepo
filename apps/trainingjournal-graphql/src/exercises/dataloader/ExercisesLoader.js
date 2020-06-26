// @flow strict-local

import { ExerciseRepository, ExerciseModel } from '@tbergq/trainingjournal-persistence';
import DataLoader from 'dataloader';

const fetchExercises = (userIds: $ReadOnlyArray<number>) =>
  Promise.all(userIds.map((userId) => ExerciseRepository.getByUserId(userId)));

const ExercisesLoader = (): DataLoader<number, $ReadOnlyArray<ExerciseModel>, number> =>
  new DataLoader(fetchExercises);

export default ExercisesLoader;
