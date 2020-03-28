// @flow

import { GraphQLUnionType } from 'graphql';

import TJViewer from '../../../trainingjournal/types/output/TraningJournalViewer';
import TVHViewer from '../../../tvhelper/account/types/output/TvHelperViewer';
import Unauthorized from './Unauthorized';

export default (new GraphQLUnionType({
  name: 'Viewer',
  types: [TJViewer, TVHViewer, Unauthorized],
  resolveType: value => {
    if (value === 'trainingjournal') {
      return TJViewer;
    } else if (value === 'tvhelper') {
      return TVHViewer;
    }
    return Unauthorized;
  },
}): GraphQLUnionType);
