// @flow

import ViewerType from '../types/output/Viewer';
import type { GraphqlContextType } from '../../services/createGraphqlContext';

export default {
  type: ViewerType,
  description: 'User context',
  resolve: (_: mixed, __: mixed, { user }: GraphqlContextType) => {
    return user?.app ?? 'Unauthorized';
  },
};
