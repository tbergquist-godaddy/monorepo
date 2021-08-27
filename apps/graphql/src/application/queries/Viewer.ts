import ViewerType from '../models/Viewer';
import type { GraphqlContextType } from '../../services/createGraphqlContext';

export default {
  type: ViewerType,
  description: 'User context',
  resolve: (_: unknown, __: unknown, { user }: GraphqlContextType): string => {
    return user == null ? 'Unauthorized' : 'tvhelper';
  },
};
