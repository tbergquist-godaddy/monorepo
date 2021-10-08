import { GraphQLNonNull, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { IStoredOperationDTO } from 'stored-operation';
import { GraphqlContextType } from 'services/createGraphqlContext';

import CreatedStoredOperation from '../types/output/StoredOperationMutation';
import StoredOperationInput from '../types/input/StoredOperationInput';

type Args = {
  storedOperations: ReadonlyArray<IStoredOperationDTO>;
};

export default {
  type: CreatedStoredOperation,
  args: {
    storedOperations: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(StoredOperationInput))) as GraphQLNonNull<
        GraphQLList<GraphQLNonNull<GraphQLInputObjectType>>
      >,
    },
  },
  resolve: async (
    _: unknown,
    args: Args,
    { storedOperationService }: GraphqlContextType,
  ): Promise<{
    createdOperations: ReadonlyArray<IStoredOperationDTO>;
  }> => {
    const addedOperations = await storedOperationService.addOperations(args.storedOperations);
    return {
      createdOperations: addedOperations ?? [],
    };
  },
};
