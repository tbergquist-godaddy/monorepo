// @flow

import Dataloader from 'dataloader';

import createExercisesLoader, {
  type ExercisesArgs,
  type ExercisesLoader,
} from './exercise/dataloader/ExercisesLoader';
import createProgramsLoader, {
  type ProgramArgs,
  type ProgramLoader,
} from './programs/dataloaders/ProgramsLoader';

export type TrainingJournalDataLoaders = {|
  +exercises: Dataloader<ExercisesArgs, ExercisesLoader>,
  +programs: Dataloader<ProgramArgs, ProgramLoader>,
|};

export default function getDataloaders() {
  return {
    exercises: createExercisesLoader(),
    programs: createProgramsLoader(),
  };
}
