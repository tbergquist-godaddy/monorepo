import { GraphQLUnionType } from 'graphql';

import TVHViewer from './TvHelperViewer';
import Unauthorized from '../../common/types/output/Unauthorized';

export default new GraphQLUnionType({
  name: 'Viewer',
  types: [TVHViewer, Unauthorized],
  resolveType: (value) => {
    if (value === 'tvhelper') {
      return TVHViewer;
    }
    return Unauthorized;
  },
});
