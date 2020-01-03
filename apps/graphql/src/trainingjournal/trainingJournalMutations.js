// @flow

import trainingJournalLogin from './account/mutations/TrainingJournalLogin';
import createTrainingjournalUser from './account/mutations/CreateTrainingjournalUser';
import createExercise from './exercise/mutations/CreateExercise';
import deleteExercise from './exercise/mutations/DeleteExercise';
import editExercise from './exercise/mutations/EditExercise';
import createProgram from './programs/mutations/CreateProgram';

export default {
  createExercise,
  createProgram,
  createTrainingjournalUser,
  deleteExercise,
  editExercise,
  trainingJournalLogin,
};
