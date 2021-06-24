import { GraphQLNonNull, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { StoredOperationRepository } from '@tbergq/graphql-persistence';

import CreatedStoredOperation from '../types/output/StoredOperationMutation';
import StoredOperationInput from '../types/input/StoredOperationInput';

type StoredOperationType = {
  readonly operationId: string;
  readonly text: string;
};

type Args = {
  storedOperations: ReadonlyArray<StoredOperationType>;
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
  ): Promise<{
    createdOperations: any;
  }> => {
    const addedOperations = await StoredOperationRepository.addOperations(args.storedOperations);
    return {
      createdOperations: addedOperations ?? [],
    };
  },
};
