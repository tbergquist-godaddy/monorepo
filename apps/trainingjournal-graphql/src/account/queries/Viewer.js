// @flow strict-local

import ViewerType from '../types/output/Viewer';
import type { GraphqlContextType } from '../../createContext';

export default {
  type: ViewerType,
  description: 'User context',
  resolve: (
    _: mixed,
    __: mixed,
    { user }: GraphqlContextType,
  ): string | $PropertyType<GraphqlContextType, 'user'> => {
    return user ?? 'Unauthorized';
  },
};
