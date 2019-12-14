// @flow

import Dataloader from 'dataloader';
import { type ExerciseType } from '@tbergq/trainingjournal-persistence';

import createExercisesLoader from './exercise/dataloader/ExercisesLoader';

export type TrainingJournalDataLoaders = {|
  +exercises: Dataloader<string, ExerciseType[]>,
|};

export default function getDataloaders() {
  return {
    exercises: createExercisesLoader(),
  };
}
