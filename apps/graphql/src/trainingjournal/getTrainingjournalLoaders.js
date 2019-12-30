// @flow

import Dataloader from 'dataloader';

import createExercisesLoader, {
  type ExercisesArgs,
  type ExercisesLoader,
} from './exercise/dataloader/ExercisesLoader';

export type TrainingJournalDataLoaders = {|
  +exercises: Dataloader<ExercisesArgs, ExercisesLoader>,
|};

export default function getDataloaders() {
  return {
    exercises: createExercisesLoader(),
  };
}
