// @flow strict

import { GraphQLUnionType } from 'graphql';

import TJViewer from '../../../trainingjournal/types/output/TraningJournalViewer';
import Unauthorized from './Unauthorized';

export default new GraphQLUnionType({
  name: 'Viewer',
  types: [TJViewer, Unauthorized],
  resolveType: value => {
    if (value === 'trainingjournal') {
      return TJViewer;
    }
    return Unauthorized;
  },
});
