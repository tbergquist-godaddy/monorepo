// @flow strict

import { GraphQLUnionType } from 'graphql';

import TJViewer from '../../../trainingjournal/types/output/TraningJournalViewer';

export default new GraphQLUnionType({
  name: 'Viewer',
  types: [TJViewer],
  resolveType: value => {
    if (value === 'trainingjournal') {
      return TJViewer;
    }
    // TODO: Unauthorized type
    return null;
  },
});
