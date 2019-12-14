// @flow

import type { LoggedInUser } from '@tbergq/graphql-services';
import type { $Request } from 'express';

import getTvhelperLoaders, { type TvHelperDataLoaders } from '../tvhelper/getDataloaders';
import getTrainingJournalLoaders, {
  type TrainingJournalDataLoaders,
} from '../trainingjournal/getTrainingjournalLoaders';

export type GraphqlContextType = {|
  +user: ?LoggedInUser,
  +dataLoader: {|
    +tvhelper: TvHelperDataLoaders,
    +trainingjournal: TrainingJournalDataLoaders,
  |},
|};

export default function createContext(request: $Request): GraphqlContextType {
  return {
    user: request.user,
    dataLoader: {
      tvhelper: getTvhelperLoaders(request.user),
      trainingjournal: getTrainingJournalLoaders(),
    },
  };
}
