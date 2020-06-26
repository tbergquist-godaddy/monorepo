// @flow strict-local

import DataLoader from 'dataloader';
import { ExerciseModel } from '@tbergq/trainingjournal-persistence';

import createExercisesLoader from './exercises/dataloader/ExercisesLoader';

type User = {
  +id: number,
  +username: string,
  +email: string,
};
export type GraphqlContextType = {
  +user: ?User,
  +dataloader: {
    exercises: DataLoader<number, $ReadOnlyArray<ExerciseModel>>,
  },
};
type Input = {
  +req: { user?: User },
};
export default function createContext({ req }: Input): GraphqlContextType {
  return {
    user: req.user,
    dataloader: {
      exercises: createExercisesLoader(),
    },
  };
}
